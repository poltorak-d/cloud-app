const taskRepository = require("../Repositories/taskRepository");

const getAllTasks = async () => {
  return await taskRepository.getAllTasks();
};

const getTaskById = async (id) => {
  return await taskRepository.getTaskById(id);
};

const createTask = async (title) => {
  if (!title || !title.trim()) {
    const error = new Error("Title is required");
    error.status = 400;
    throw error;
  }

  return await taskRepository.createTask(title.trim());
};

const updateTask = async (id, title) => {
  if (!title || !title.trim()) {
    const error = new Error("Title is required");
    error.status = 400;
    throw error;
  }

  const existingTask = await taskRepository.getTaskById(id);

  if (!existingTask) {
    const error = new Error("Task not found");
    error.status = 404;
    throw error;
  }

  return await taskRepository.updateTask(id, title.trim());
};

const deleteTask = async (id) => {
  const existingTask = await taskRepository.getTaskById(id);

  if (!existingTask) {
    const error = new Error("Task not found");
    error.status = 404;
    throw error;
  }

  return await taskRepository.deleteTask(id);
};

const getHealth = async () => {
  const dbTime = await taskRepository.getDatabaseTime();
  return { status: "ok", time: dbTime };
};

module.exports = {
  getAllTasks,
  getTaskById,
  createTask,
  updateTask,
  deleteTask,
  getHealth
};