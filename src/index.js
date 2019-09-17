document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const submitButton = document.querySelector("#create-task-form > input[type=submit]:nth-child(3)")
  const toDoList = document.querySelector("#tasks")

  submitButton.addEventListener("click", function(e){
    console.log("don't refresh page")
    e.preventDefault();



  // set value of task to user input
  // add task to page
    const task = document.querySelector("#new-task-description").value
    let toDoList = document.querySelector("#tasks")
    let li = document.createElement('li')
    let addTask = toDoList.appendChild(li)
    addTask.innerText = task
    
  })

});


// [O] As a user, I should be able to click some form of a submit button.

// [X] As a user, the task string that I provided should appear on the DOM after the submit button has been activated.


// [X] As a user, I should be able to type a task into the input field.
