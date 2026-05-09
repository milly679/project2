import { state } from "../state.js";

import { renderColumn }
from "./column.js";

export function renderBoard() {

  return `
  
    ${renderColumn(
      "To Do",
      "todo",
      state.columns.todo
    )}

    ${renderColumn(
      "In Progress",
      "doing",
      state.columns.doing
    )}

    ${renderColumn(
      "Done",
      "done",
      state.columns.done
    )}
  
  `;

}