const taskService = require("../Services/taskService");

const getHealth = async (req, res, next) => {
  try {
    const result = await taskService.getHealth();
    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};

const getAllTasks = async (req, res, next) => {
  try {
    const tasks = await taskService.getAllTasks();
    res.status(200).json(tasks);
  } catch (error) {
    next(error);
  }
};

const getTaskById = async (req, res, next) => {
  try {
    const task = await taskService.getTaskById(req.params.id);

    if (!task) {
      return res.status(404).json({ message: "Task not found" });
    }

    res.status(200).json(task);
  } catch (error) {
    next(error);
  }
};

const createTask = async (req, res, next) => {
  try {
    const newTask = await taskService.createTask(req.body.title);
    res.status(201).json(newTask);
  } catch (error) {
    next(error);
  }
};

const updateTask = async (req, res, next) => {
  try {
    const updatedTask = await taskService.updateTask(
      req.params.id,
      req.body.title
    );
    res.status(200).json(updatedTask);
  } catch (error) {
    next(error);
  }
};

const deleteTask = async (req, res, next) => {
  try {
    const deletedTask = await taskService.deleteTask(req.params.id);
    res.status(200).json({
      message: "Task deleted",
      task: deletedTask
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getHealth,
  getAllTasks,
  getTaskById,
  createTask,
  updateTask,
  deleteTask
};