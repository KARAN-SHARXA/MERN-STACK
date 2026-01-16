// ==============================
// DOM REFERENCES
// ==============================
const todo = document.querySelector("#to-do");
const progress = document.querySelector("#progress");
const done = document.querySelector("#done");

const modal = document.querySelector(".modal");
const modalBg = document.querySelector(".modal .bg");
const toggleModalButton = document.querySelector("#toggle-modal");
const addTaskButton = document.querySelector("#add-new-task");

const titleInput = document.querySelector("#task-title-input");
const descInput = document.querySelector("#task-des-input");

let draggedTask = null;

// ==============================
// DATA MODEL
// ==============================
const STORAGE_KEY = "kanban-tasks";

let tasksData = {
  todo: [],
  progress: [],
  done: []
};

// ==============================
// LOCAL STORAGE
// ==============================
function saveTasks() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(tasksData));
}

function loadTasks() {
  const data = localStorage.getItem(STORAGE_KEY);
  if (data) tasksData = JSON.parse(data);
}

// ==============================
// UI HELPERS
// ==============================
function updateCounts() {
  [todo, progress, done].forEach(col => {
    col.querySelector(".right").innerText =
      col.querySelectorAll(".task").length;
  });
}

function clearColumns() {
  [todo, progress, done].forEach(col => {
    col.querySelectorAll(".task").forEach(task => task.remove());
  });
}

// ==============================
// TASK ELEMENT
// ==============================
function createTaskElement(task) {
  const div = document.createElement("div");
  div.className = "task";
  div.draggable = true;
  div.dataset.id = task.id;

  div.innerHTML = `
    <h2>${task.title}</h2>
    <p>${task.desc}</p>
    <button class="delete-btn">Delete</button>
  `;

  // Drag start
  div.addEventListener("dragstart", () => {
    draggedTask = div;
  });

  // Delete
  div.querySelector(".delete-btn").addEventListener("click", () => {
    deleteTask(task.id);
  });

  return div;
}

// ==============================
// RENDER TASKS
// ==============================
function renderTasks() {
  clearColumns();

  tasksData.todo.forEach(task =>
    todo.appendChild(createTaskElement(task))
  );

  tasksData.progress.forEach(task =>
    progress.appendChild(createTaskElement(task))
  );

  tasksData.done.forEach(task =>
    done.appendChild(createTaskElement(task))
  );

  updateCounts();
}

// ==============================
// DELETE TASK
// ==============================
function deleteTask(taskId) {
  ["todo", "progress", "done"].forEach(col => {
    tasksData[col] = tasksData[col].filter(task => task.id !== taskId);
  });

  document.querySelector(`[data-id="${taskId}"]`)?.remove();
  updateCounts();
  saveTasks();
}

// ==============================
// DRAG & DROP
// ==============================
function enableDrop(column, columnName) {
  column.addEventListener("dragover", e => e.preventDefault());

  column.addEventListener("dragenter", () => {
    column.classList.add("hover-over");
  });

  column.addEventListener("dragleave", () => {
    column.classList.remove("hover-over");
  });

  column.addEventListener("drop", () => {
    if (!draggedTask) return;

    const taskId = draggedTask.dataset.id;
    const title = draggedTask.querySelector("h2").innerText;
    const desc = draggedTask.querySelector("p").innerText;

    // Remove task from all columns
    ["todo", "progress", "done"].forEach(col => {
      tasksData[col] = tasksData[col].filter(task => task.id !== taskId);
    });

    // Add to new column
    tasksData[columnName].push({ id: taskId, title, desc });
    column.appendChild(draggedTask);

    column.classList.remove("hover-over");
    updateCounts();
    saveTasks();
  });
}

enableDrop(todo, "todo");
enableDrop(progress, "progress");
enableDrop(done, "done");

// ==============================
// MODAL CONTROLS
// ==============================
toggleModalButton.addEventListener("click", () => {
  modal.classList.toggle("active");
});

modalBg.addEventListener("click", () => {
  modal.classList.remove("active");
});

// ==============================
// ADD NEW TASK
// ==============================
addTaskButton.addEventListener("click", () => {
  const title = titleInput.value.trim();
  const desc = descInput.value.trim();

  if (!title) {
    alert("Task title is required");
    return;
  }

  const newTask = {
    id: Date.now().toString(),
    title,
    desc
  };

  tasksData.todo.push(newTask);
  todo.appendChild(createTaskElement(newTask));

  titleInput.value = "";
  descInput.value = "";

  modal.classList.remove("active");
  updateCounts();
  saveTasks();
});

// ==============================
// INIT APP
// ==============================
loadTasks();
renderTasks();
