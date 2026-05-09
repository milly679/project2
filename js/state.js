export let state = {
  columns: {
    todo: [],
    doing: [],
    done: [],
  },
};

// ADD TASK
export function addTask(column, task) {
  state.columns[column].push(task);
}

// DELETE TASK
export function deleteTask(taskId) {

  Object.keys(state.columns).forEach(column => {

    state.columns[column] =
      state.columns[column].filter(
        task => task.id !== taskId
      );

  });

}

// MOVE TASK
export function moveTask(
  taskId,
  fromColumn,
  toColumn
) {

  const task =
    state.columns[fromColumn].find(
      task => task.id === taskId
    );

  if (!task) return;

  state.columns[fromColumn] =
    state.columns[fromColumn].filter(
      task => task.id !== taskId
    );

  state.columns[toColumn].push(task);

}