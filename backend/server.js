const express = require("express");
const cors = require("cors");
const taskController = require("./Controllers/taskController");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/api/health", taskController.getHealth);

app.get("/api/tasks", taskController.getAllTasks);
app.get("/api/tasks/:id", taskController.getTaskById);
app.post("/api/tasks", taskController.createTask);
app.put("/api/tasks/:id", taskController.updateTask);
app.delete("/api/tasks/:id", taskController.deleteTask);

app.use((error, req, res, next) => {
  console.error(error);

  const status = error.status || 500;
  const message = error.message || "Internal server error";

  res.status(status).json({ message });
});

app.listen(8081, () => {
  console.log("Backend running on port 8081");
});