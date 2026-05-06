export let state = {
  columns: {
    todo: [],
    doing: [],
    done: [],
  },
};

export function addTask(column, task) {
  state.columns[column].push(task);
}

export function moveTask(taskId, fromCol, toCol) {
  const task = state.columns[fromCol].find((t) => t.id === taskId);

  state.columns[fromCol] = state.columns[fromCol].filter(
    (t) => t.id !== taskId,
  );
  state.columns[toCol].push(task);
}
