const mapToTaskReadDto = (task) => {
  return {
    id: task.id,
    title: task.title
  };
};

module.exports = {
  mapToTaskReadDto
};