import { renderTask } from "./task.js";

export function renderColumn(id, title, tasks) {
  return `
    <div class="column" data-column="${id}">
      <h3>${title}</h3>
      ${tasks.map(renderTask).join("")}
    </div>
  `;
}
