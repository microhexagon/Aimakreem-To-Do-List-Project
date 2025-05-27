function addTask () {
    const taskbar = document.getElementById("taskbar");
    const taskText = taskbar.Value.trim();

    if (taskText !== "") {
        const taskList = document.getElementById("taskList");
        const li = document.createElement("li");
            li.innerHTML = `
        <input type="checkbox" />
        <label>${taskText}</label>
    `;   
    taskList.appendChild(li);
    taskInput.value = ""; 
    }
}