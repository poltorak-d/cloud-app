const request = require("supertest");
const app = require("./server");

jest.mock("./Services/taskService", () => ({
  getHealth: jest.fn().mockResolvedValue({
    status: "ok",
    time: "2026-04-17T00:00:00.000Z"
  }),
  getAllTasks: jest.fn().mockResolvedValue([
    { id: 1, title: "Task testowy" }
  ]),
  getTaskById: jest.fn(),
  createTask: jest.fn(),
  updateTask: jest.fn(),
  deleteTask: jest.fn()
}));

describe("API integration test", () => {
  test("GET /api/tasks should return task list", async () => {
    const response = await request(app).get("/api/tasks");

    expect(response.status).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
    expect(response.body[0].title).toBe("Task testowy");
  });
});