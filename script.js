// Wait until DOM is fully loaded before running our code
document.addEventListener('DOMContentLoaded', function () {

  // Select DOM elements
  const addButton = document.getElementById('add-task-btn');
  const taskInput = document.getElementById('task-input');
  const taskList = document.getElementById('task-list');

  // addTask - create new task li and append to taskList
  function addTask() {
    const taskText = taskInput.value.trim();

    // If input is empty, prompt the user
    if (taskText === '') {
      alert('Please enter a task.');
      return;
    }

    // Create list item and remove button
    const li = document.createElement('li');

    const span = document.createElement('span');
    span.textContent = taskText;

    const removeBtn = document.createElement('button');
    removeBtn.textContent = 'Remove';
    removeBtn.className = 'remove-btn';

    // When remove button is clicked, remove this li from the list
    removeBtn.addEventListener('click', function () {
      taskList.removeChild(li);
    });

    // Compose and append
    li.appendChild(span);
    li.appendChild(removeBtn);
    taskList.appendChild(li);

    // Clear input and focus for convenience
    taskInput.value = '';
    taskInput.focus();
  }

  // Click listener for Add Task button
  addButton.addEventListener('click', addTask);

  // Allow Enter key to add task
  taskInput.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
      event.preventDefault();
      addTask();
    }
  });

});
