// Wait for page to load before running script
document.addEventListener("DOMContentLoaded", function () {
  // Select DOM elements by their IDs
  const addButton = document.getElementById("add-task-btn"); // Add button
  const taskInput = document.getElementById("task-input");   // Input field
  const taskList  = document.getElementById("task-list");    // Task list container

  // Function to add a new task
  function addTask() {
    const taskText = taskInput.value.trim(); // get and clean user input

    if (taskText === "") {
      alert("Please enter a task!");
      return; // stop if input is empty
    }

    // --- Task Creation and Removal (step by step as required) ---

    // 1. Create a new li element and set its textContent
    const li = document.createElement("li");
    li.textContent = taskText;

    // 2. Create a remove button
    const removeBtn = document.createElement("button");
    removeBtn.textContent = "Remove";      // set button text
    removeBtn.classList.add("remove-btn"); // add class using classList.add ✅

    // 3. Assign an onclick event to remove the li from taskList
    removeBtn.onclick = function () {
      taskList.removeChild(li);
    };

    // 4. Append remove button inside li
    li.appendChild(removeBtn);

    // 5. Append li inside the task list
    taskList.appendChild(li);

    // 6. Clear the input field
    taskInput.value = "";
  }

  // Attach Event Listeners
  addButton.addEventListener("click", addTask); // when button clicked
  taskInput.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      addTask(); // when Enter key is pressed
    }
  });
});
