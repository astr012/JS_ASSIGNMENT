const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function saveTasks() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function renderTasks() {
  taskList.innerHTML = "";
  tasks.forEach((t, i) => {
    const li = document.createElement("li");
    li.innerHTML = `
      <span class="${t.completed ? "completed" : ""}">${t.name}</span>
      <div class="task-btns">
        <button data-action="toggle" data-i="${i}">Done</button>
        <button data-action="edit" data-i="${i}">Edit</button>
        <button data-action="delete" data-i="${i}">Delete</button>
      </div>
    `;
    taskList.appendChild(li);
  });
}

addTaskBtn.addEventListener("click", () => {
  const val = taskInput.value.trim();
  if (!val) return alert("Enter a task");
  tasks.push({ name: val, completed: false });
  taskInput.value = "";
  saveTasks();
  renderTasks();
});

taskList.addEventListener("click", (e) => {
  const btn = e.target;
  const action = btn.dataset.action;
  const i = parseInt(btn.dataset.i);
  if (action === "toggle") {
    tasks[i].completed = !tasks[i].completed;
    saveTasks();
    renderTasks();
  } else if (action === "edit") {
    const newName = prompt("Edit task", tasks[i].name);
    if (newName !== null) {
      tasks[i].name = newName.trim();
      saveTasks();
      renderTasks();
    }
  } else if (action === "delete") {
    tasks.splice(i, 1);
    saveTasks();
    renderTasks();
  }
});

// initial render
renderTasks();
