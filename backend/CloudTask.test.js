class CloudTask {
  constructor(name) {
    this.name = name;
    this.isCompleted = false;
  }
}

test("NewTask_ShouldNotBeCompleted", () => {
  const task = new CloudTask("Przetestować bezpiecznik");
  expect(task.isCompleted).toBe(false);
});