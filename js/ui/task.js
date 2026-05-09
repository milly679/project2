export function renderTask(task) {

  return `
  
    <div 
      class="task"
      draggable="true"
      data-id="${task.id}"
    >

      <h3>${task.title}</h3>

      <p>${task.description}</p>

      <button 
        class="delete-btn"
        data-id="${task.id}"
      >
        Delete
      </button>

    </div>
  
  `;

}