// Wait until DOM is fully loaded before running our code
document.addEventListener('DOMContentLoaded', function () {

  // Select DOM elements
  const addButton = document.getElementById('add-task-btn');
  const taskInput = document.getElementById('task-input');
  const taskList = document.getElementById('task-list');

  /**
   * addTask - creates a new task <li> with a Remove button and appends it to the list.
   */
  function addTask() {
    const taskText = taskInput.value.trim();

    // If input is empty, alert the user and do nothing
    if (taskText === '') {
      alert('Please enter a task.');
      return;
    }

    // Create list item
    const li = document.createElement('li');

    // Create a span for the task text to separate content from the button
    const span = document.createElement('span');
    span.textContent = taskText;

    // Create remove button
    const removeBtn = document.createElement('button');
    removeBtn.textContent = 'Remove';
    removeBtn.className = 'remove-btn';

    // Attach click handler to remove this task
    removeBtn.addEventListener('click', function () {
      taskList.removeChild(li);
    });

    // Compose the li
    li.appendChild(span);
    li.appendChild(removeBtn);

    // Append to task list and clear input
    taskList.appendChild(li);
    taskInput.value = '';
    taskInput.focus();
  }

  // Add click listener to Add Task button
  addButton.addEventListener('click', addTask);

  // Allow pressing Enter inside the input to add the task
  taskInput.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
      event.preventDefault(); // prevent form submission or unintended behavior
      addTask();
    }
  });

  // OPTIONAL: If you want to add a default task on load (not required), uncomment:
  // addTask(); // careful: only do this if taskInput has a value

});
