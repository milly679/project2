import { renderColumn } from "./column.js";

export function renderBoard(state) {
  return `
    ${renderColumn("todo", "To Do", state.columns.todo)}
    ${renderColumn("doing", "In Progress", state.columns.doing)}
    ${renderColumn("done", "Done", state.columns.done)}
  `;
}
