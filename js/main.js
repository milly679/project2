import { state, addTask } from "./state.js";
import { renderBoard } from "./ui/board.js";

function render() {
  const root = document.getElementById("app");
  root.innerHTML = renderBoard(state);
}

window.addEventListener("DOMContentLoaded", () => {
  render();

  document.getElementById("addTaskBtn").addEventListener("click", () => {
    const title = prompt("Task title?");
    if (!title) return;

    addTask("todo", {
      id: Date.now().toString(),
      title,
    });

    render();
  });
});
