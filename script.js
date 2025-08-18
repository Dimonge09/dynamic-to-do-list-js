// Wait until the page is fully loaded
document.addEventListener("DOMContentLoaded", function () {
    // Select important elements
    const addButton = document.getElementById("add-task-btn");
    const taskInput = document.getElementById("task-input");
    const taskList = document.getElementById("task-list");

    // Function to add a task
    function addTask() {
        const taskText = taskInput.value.trim(); // get input value

        if (taskText === "") {
            alert("Please enter a task!");
            return;
        }

        // create new list item
        const li = document.createElement("li");
        li.textContent = taskText;

        // create remove button
        const removeBtn = document.createElement("button");
        removeBtn.textContent = "Remove";
        removeBtn.className = "remove-btn";

        // remove task when clicked
        removeBtn.onclick = function () {
            taskList.removeChild(li);
        };

        // put button inside list item
        li.appendChild(removeBtn);

        // add list item to task list
        taskList.appendChild(li);

        // clear input field
        taskInput.value = "";
    }

    // Add event listeners
    addButton.addEventListener("click", addTask);
    taskInput.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            addTask();
        }
    });
});
