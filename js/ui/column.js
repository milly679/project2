import { renderTask } from "./task.js";

export function renderColumn(
  title,
  columnKey,
  tasks
) {

  return `
  
    <section
      class="column"
      data-column="${columnKey}"
    >

      <h2>${title}</h2>

      <div class="task-list">

        ${tasks.map(renderTask).join("")}

      </div>

    </section>
  
  `;

}