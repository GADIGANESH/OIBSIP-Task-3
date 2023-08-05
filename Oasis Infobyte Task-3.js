// Get DOM elements
var taskInput = document.getElementById("taskInput");
var addBtn = document.getElementById("addBtn");
var taskList = document.getElementById("taskList");

// Event listener for adding a task
addBtn.addEventListener("click", function() {
  var taskText = taskInput.value;

  if (taskText.trim() !== "") {
    // Create a new list item
    var li = document.createElement("li");
    li.innerText = taskText;

    // Create a delete button for the task
    var deleteBtn = document.createElement("button");
    deleteBtn.innerText = "Delete";
    deleteBtn.addEventListener("click", function() {
      li.remove();
    });

    // Add click event listener to mark task as completed
    li.addEventListener("click", function() {
      li.classList.toggle("completed");
    });

    // Append delete button to the list item
    li.appendChild(deleteBtn);

    // Add the new item to the list
    taskList.appendChild(li);

    // Clear the input field
    taskInput.value = "";
  }
});