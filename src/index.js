document.addEventListener("DOMContentLoaded", () => {
  // your code here
  let form = document.getElementById('create-task-form');
  form.addEventListener("submit", subFunc)
});


function subFunc(e){
  e.preventDefault();
  let textField = document.querySelector("#new-task-description");
  let task = textField.value;
  let taskList = document.querySelector("#tasks");
  let taskPriority = document.querySelector("#priority");

  let taskEntry = document.createElement("li");
  if (taskPriority.value === "low") {
    taskEntry.style.color = "green"
  } else if (taskPriority.value === "medium") {
    taskEntry.style.color = "orange"
  } else {
    taskEntry.style.color = "red"
  }

  taskEntry.innerText = `${task} `;

  let deleteButton = document.createElement("button");
  deleteButton.innerText = "X";
  deleteButton.addEventListener("click", () => { taskEntry.remove() });
  taskEntry.appendChild(deleteButton);

  taskList.appendChild(taskEntry);
  e.target.reset();
}
