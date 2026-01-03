function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Please enter a task");
        return;
    }

    const li = document.createElement("li");
    li.textContent = taskText;

    const completeBtn = document.createElement("button");
    completeBtn.textContent = "✔";
    completeBtn.className = "complete-btn";

    completeBtn.onclick = function () {
        li.classList.toggle("completed");
    };

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "X";
    deleteBtn.className = "delete-btn";

    deleteBtn.onclick = function () {
        const confirmDelete = confirm("Are you sure?")
        if (confirmDelete) {
            li.remove();
        }
    };

    const btnContaioner = document.createElement("div");
    btnContaioner.appendChild(completeBtn);
    btnContaioner.appendChild(deleteBtn);

    li.appendChild(btnContaioner);

    document.getElementById("taskList").appendChild(li);

    taskInput.value = "";
}
