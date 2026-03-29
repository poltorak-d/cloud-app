const fs = require("fs");
const path = require("path");
const { Pool } = require("pg");

const pool = new Pool({
  host: process.env.DB_HOST || "db",
  port: process.env.DB_PORT || 5432,
  user: process.env.DB_USER || "postgres",
  password: process.env.DB_PASSWORD || "postgres",
  database: process.env.DB_NAME || "cloudapp",
  ssl: {
    rejectUnauthorized: false
  }
});

const runMigrations = async () => {
  const client = await pool.connect();

  try {
    await client.query(`
      CREATE TABLE IF NOT EXISTS schema_migrations (
        id SERIAL PRIMARY KEY,
        filename VARCHAR(255) NOT NULL UNIQUE,
        applied_at TIMESTAMP NOT NULL DEFAULT NOW()
      );
    `);

    const migrationsDir = path.join(__dirname, "Migrations");
    const files = fs
      .readdirSync(migrationsDir)
      .filter((file) => file.endsWith(".sql"))
      .sort();

    const appliedResult = await client.query(
      "SELECT filename FROM schema_migrations"
    );
    const appliedMigrations = appliedResult.rows.map((row) => row.filename);

    for (const file of files) {
      if (appliedMigrations.includes(file)) {
        console.log(`Skipping already applied migration: ${file}`);
        continue;
      }

      const filePath = path.join(migrationsDir, file);
      const sql = fs.readFileSync(filePath, "utf8");

      console.log(`Applying migration: ${file}`);
      await client.query("BEGIN");
      await client.query(sql);
      await client.query(
        "INSERT INTO schema_migrations (filename) VALUES ($1)",
        [file]
      );
      await client.query("COMMIT");
      console.log(`Applied migration: ${file}`);
    }

    console.log("All migrations finished.");
  } catch (error) {
    await client.query("ROLLBACK");
    console.error("Migration error:", error);
    process.exit(1);
  } finally {
    client.release();
    await pool.end();
  }
};

runMigrations();