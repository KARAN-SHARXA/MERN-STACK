const todo = document.querySelector("#to-do");
const progress = document.querySelector("#progress");
const done = document.querySelector("#done");
let dragElement = null;

// Dragbale process

const tasks = document.querySelectorAll(".task");
tasks.forEach((task) => {
  task.addEventListener("dragstart", (e) => {
    // console.log("dragging",e);
    dragElement = task;
  });
});

function addDrageEventOnColumn(column) {
  column.addEventListener("dragenter", (e) => {
    e.preventDefault();
    column.classList.add("hover-over");
  });
  column.addEventListener("dragleave", (e) => {
    e.preventDefault();
    column.classList.remove("hover-over");
  });

  column.addEventListener("dragover", (e) => {
    e.preventDefault();
  });

  column.addEventListener("drop", (e) => {
    e.preventDefault();
    console.log("Dropeed", dragElement, column);
    column.appendChild(dragElement);
    column.classList.remove("hover-over");

    [todo,progress,done].forEach(col=>{
      const tasks = col.querySelectorAll(".task")
      const count = col.querySelector(".right");

      count.innerText = tasks.length;
    })
  });
}

addDrageEventOnColumn(todo);
addDrageEventOnColumn(progress);
addDrageEventOnColumn(done);

//add task option

const modalbg = document.querySelector(".modal .bg");
const modal = document.querySelector(".modal");
const toggleModalButton = document.querySelector("#toggle-modal");
toggleModalButton.addEventListener("click", () => {
  modal.classList.toggle("active");
});
modalbg.addEventListener("click", () => {
  modal.classList.remove("active");
});

const addTaskButton = document.querySelector("#add-new-task");
addTaskButton.addEventListener("click", () => {
  const taskTitle = document.querySelector("#task-title-input").value;
  const taskDesc = document.querySelector("#task-des-input").value;

  const div = document.createElement("div");
  div.classList.add("task");
  div.setAttribute("draggable", "true");

  div.innerHTML = `<h2>${taskTitle}</h2>
                 <p>${taskDesc}</p>
                 <button>Delete</button>
                `;
  todo.append(div);
  div.addEventListener("drag",(e)=>{
    dragElement=div;
  })
  modal.classList.remove("active");
});
