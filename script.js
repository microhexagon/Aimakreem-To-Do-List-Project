const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask() {
    const task = inputBox.value.trim();
    if (!task) {
        alert ("Please write down a task");
        return;
    }


const li = document.createElement("li");
li.innerHTML = `
<label class="text-[#EAEFEF] text-3xl m-6 p-6">
    <input type = "checkbox" class="w-6 h-6">
    <span>${task}</span>
</label>
    <span class="edit-btn text-red-500 p-4 text-3xl">Edit</span>
    <span class="delete-btn text-red-500 p-4 text-3xl">Delete</span>
`;

listContainer.appendChild(li);
inputBox.value = "";

}

const checkbox =  li.querySelector("input");
const editbtn =  li.querySelector(".edit-btn");
const taskspan =  li.querySelector("span");
const deletebtn  =  li.querySelector(".delete-btn");

checkbox.addEventListener("click", function () {
    li.classList.toggle("completed", checkbox.checked);
});
editbtn.addEventListener ("click" ,function(){
    const update = prompt ("edit task:" , taskspan.textContext);
    if (update !== null) {
        taskSpan.textContent = update;
        li.classList.remove("completed");
    }
});
    li.classList.remove("completed");