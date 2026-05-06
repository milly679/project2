export function renderTask(task) {
  return `
    <div class="task" draggable="true" data-id="${task.id}">
      ${task.title}
    </div>
  `;
}
