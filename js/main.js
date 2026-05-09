import { renderBoard }
from "./ui/board.js";

import {
  addTask,
  deleteTask,
  moveTask
} from "./state.js";

const board =
  document.getElementById("board");

const addTaskBtn =
  document.getElementById("add-task-btn");


// RENDER FUNCTION
function render() {
  board.innerHTML = renderBoard();
}

render();


// ADD TASK
addTaskBtn.addEventListener("click", () => {

  const title =
    prompt("Enter task title");

  if (!title) return;

  const description =
    prompt("Enter description");

  const column =
    prompt(
      "Enter column: todo, doing, or done"
    );

  if (
    !["todo", "doing", "done"]
    .includes(column)
  ) {

    alert("Invalid column");

    return;
  }

  addTask(column, {

    id: crypto.randomUUID(),

    title,

    description,

  });

  render();

});

// DELETE TASK
document.addEventListener("click", (e) => {

  if (
    e.target.classList.contains("delete-btn")
  ) {

    const taskId =
      e.target.dataset.id;

    deleteTask(taskId);

    render();

  }

});


// DRAG & DROP
let draggedTaskId = null;
let sourceColumn = null;


// DRAG START
document.addEventListener(
  "dragstart",
  (e) => {

    const task =
      e.target.closest(".task");

    if (!task) return;

    draggedTaskId =
      task.dataset.id;

    sourceColumn =
      task.closest(".column")
      .dataset.column;

  }
);


// ALLOW DROP
document.addEventListener(
  "dragover",
  (e) => {

    if (
      e.target.closest(".column")
    ) {
      e.preventDefault();
    }

  }
);


// DROP
document.addEventListener(
  "drop",
  (e) => {

    const column =
      e.target.closest(".column");

    if (!column) return;

    const destinationColumn =
      column.dataset.column;

    moveTask(
      draggedTaskId,
      sourceColumn,
      destinationColumn
    );

    render();

  }
);