const { Pool } = require("pg");

const pool = new Pool({
  host: "cloud-task-manager-db.cba8kagkwfyz.eu-central-1.rds.amazonaws.com",
  port: process.env.DB_PORT || 5432,
  user: process.env.DB_USER || "postgres",
  password: process.env.DB_PASSWORD || "87654321",
  database: "postgres",
  ssl: {
    rejectUnauthorized: false
  }
});

const getAllTasks = async () => {
  const result = await pool.query("SELECT * FROM tasks ORDER BY id ASC");
  return result.rows;
};

const getTaskById = async (id) => {
  const result = await pool.query("SELECT * FROM tasks WHERE id = $1", [id]);
  return result.rows[0];
};

const createTask = async (title) => {
  const result = await pool.query(
    "INSERT INTO tasks (title) VALUES ($1) RETURNING *",
    [title]
  );
  return result.rows[0];
};

const updateTask = async (id, title) => {
  const result = await pool.query(
    "UPDATE tasks SET title = $1 WHERE id = $2 RETURNING *",
    [title, id]
  );
  return result.rows[0];
};

const deleteTask = async (id) => {
  const result = await pool.query(
    "DELETE FROM tasks WHERE id = $1 RETURNING *",
    [id]
  );
  return result.rows[0];
};

const getDatabaseTime = async () => {
  const result = await pool.query("SELECT NOW()");
  return result.rows[0].now;
};

module.exports = {
  getAllTasks,
  getTaskById,
  createTask,
  updateTask,
  deleteTask,
  getDatabaseTime
};