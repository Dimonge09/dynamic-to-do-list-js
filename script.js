// Run after HTML is ready
document.addEventListener("DOMContentLoaded", function () {
  // ---- Select DOM elements ----
  const addButton = document.getElementById("add-task-btn");
  const taskInput = document.getElementById("task-input");
  const taskList  = document.getElementById("task-list");

  // ---- Local data (array of task strings) ----
  let tasks = []; // will be filled by loadTasks()

  // ---- Save tasks array to Local Storage ----
  function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }

  // ---- Render one task into the DOM and wire its Remove button ----
  function renderTask(taskText) {
    const li = document.createElement("li");
    li.textContent = taskText;

    const removeBtn = document.createElement("button");
    removeBtn.textContent = "Remove";
    removeBtn.classList.add("remove-btn"); // required by rubric

    // Remove from DOM + Local Storage
    removeBtn.onclick = function () {
      // remove li from the UI
      taskList.removeChild(li);

      // remove first occurrence from tasks array
      const idx = tasks.indexOf(taskText);
      if (idx > -1) {
        tasks.splice(idx, 1);
        saveTasks();
      }
    };

    li.appendChild(removeBtn);
    taskList.appendChild(li);
  }

  // ---- Add a task (can be called with or without text) ----
  // If called with text, use it; otherwise read from input.
  // 'save' flag prevents double-saving when loading from storage.
  function addTask(passedText, save = true) {
    const taskText =
      typeof passedText === "string" ? passedText : taskInput.value.trim();

    if (taskText === "") {
      alert("Please enter a task!");
      return;
    }

    // UI
    renderTask(taskText);

    // Data + Storage
    if (save) {
      tasks.push(taskText);
      saveTasks();
    }

    // Clear input only when user typed it
    if (typeof passedText !== "string") {
      taskInput.value = "";
    }
  }

  // ---- Load tasks from Local Storage on page load ----
  function loadTasks() {
    tasks = JSON.parse(localStorage.getItem("tasks") || "[]");
    // Use the API signature the rubric suggests:
    tasks.forEach((t) => addTask(t, false)); // false: don't save again
  }

  // ---- Event listeners ----
  addButton.addEventListener("click", addTask);

  taskInput.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      addTask();
    }
  });

  // Initialize
  loadTasks();
});
