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
  let taskEntry = document.createElement("li");
  taskEntry.innerText = task;
  taskList.appendChild(taskEntry);
  
}
