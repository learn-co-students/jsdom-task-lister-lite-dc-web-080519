document.addEventListener("DOMContentLoaded", () => {
  
  
  taskButton.addEventListener("submit", buttonTest)
  
  
});
// turn into arrow functions to keep them from being global variables. 
//Don't forget "return" Be sure to invoke the new functions in later code.
let description = document.getElementById("new-task-description")
let tasks = document.getElementById("tasks")
let taskButton = document.querySelector("#create-task-form")
let colors = ["Select", "Red", "Yellow", "Green"]

// "x" delete button functionality
function delete123(e) {
  let value = e.target.parentNode
  value.remove();
}

// "color selector" functionality
function colorChange(event) {
  if(event.target.value == "Red"){
    event.target.parentElement.querySelector("span").style.color = "red"
  }
  if(event.target.value == "Yellow"){
    event.target.parentElement.querySelector("span").style.color = "yellow"
  }
  if(event.target.value == "Green"){
    event.target.parentElement.querySelector("span").style.color = "green"
  }



}
// everything that happens when you click Create New Task Button
function buttonTest(event) {
  let newRow = document.createElement("li")
  let taskDescriptionSpan = document.createElement("span")
  taskDescriptionSpan.innerText = description.value
  let deleteButton = document.createElement("button")
  let coloredButton = document.createElement("select");



  deleteButton.className = `${description.value}`;
  deleteButton.innerText = "X"
  newRow.append(taskDescriptionSpan, deleteButton, coloredButton)
  // newRow.appendChild(coloredButton);
  tasks.appendChild(newRow)


// drop selector
  for (var i = 0; i < colors.length; i++) {
    var option = document.createElement("option");
    option.setAttribute("value", colors[i]);
    option.text = colors[i];
    coloredButton.appendChild(option);
  }
  
  //event listeners for drop down and delete buttons
  coloredButton.addEventListener("change", colorChange)
  deleteButton.addEventListener("click", delete123)
    event.target.reset()
    event.preventDefault();
  }
