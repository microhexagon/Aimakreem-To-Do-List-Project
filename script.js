const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
const completedCounter = document.getElementById("completed-counter");
const uncompletedCounter = document.getElementById("uncompleted-counter");

function updateCounters() {
    const completedTasks = document.querySelectorAll(".completed").length;
    const uncompletedTasks = document.querySelectorAll("li:not(.completed)").length;
    completedCounter.textContent = completedTasks;
    uncompletedCounter.textContent = uncompletedTasks;
}

function addTask() {
    const task = inputBox.value.trim();
    if (!task) {
    alert("Please write down a task");
    return;
}

    const li = document.createElement("li");
    li.className = "flex justify-between items-center bg-[#2e3b4e] m-4 p-6 rounded-lg outline outline-offset-2 outline-blue-300";
    li.innerHTML = `
    <label class="text-[#EAEFEF] text-3xl flex item-center gap-4">
        <input type="checkbox" class="w-6 h-6">
        <span>${task}</span>
    </label>
    <div class="flex gap-4">
        <span class="edit-btn text-red-500 p-4 text-3xl cursor-pointer">Edit</span>
        <span class="delete-btn text-red-500 p-4 text-3xl cursor-pointer">Delete</span>
    </div>
`;

    listContainer.appendChild(li);
    inputBox.value = "";

const checkbox = li.querySelector("input");
const editBtn = li.querySelector(".edit-btn");
const taskSpan = li.querySelector("label span");
const deleteBtn = li.querySelector(".delete-btn");

checkbox.addEventListener("click", function () {
    if (checkbox.checked) {
        taskSpan.classList.add("line-through", "text-gray-400", "opacity-60");
        li.classList.add("completed"); // 
    } else {
        taskSpan.classList.remove("line-through", "text-gray-400", "opacity-60");
        li.classList.remove("completed"); //
    }
    updateCounters(); // 
});


editBtn.addEventListener("click", function () {
    const update = prompt("Edit task:", taskSpan.textContent);
    if (update !== null && update.trim() !== "") {
        taskSpan.textContent = update.trim();
        li.classList.remove("completed");
        checkbox.checked = false;
        updateCounters();
    }
});

    deleteBtn.addEventListener("click", function () {
    li.remove();
    updateCounters();
});

    updateCounters();
}

inputBox.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
    addTask();
    }
});
