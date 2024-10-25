const inputTask = document.getElementById("todo-input")
const buttonAddTask = document.getElementById("add-task")
const todoList = document.getElementById("todo-list")
const createTask = () => {
    console.log(inputTask.value)
    if (inputTask.value.length === 0 || inputTask.value.trim() === "") {
        inputTask.value = ""
        return alert("El campo no puede estar vacio")
    }

    const lieElement = document.createElement("li")

    todoList.appendChild(lieElement) 
    lieElement.innerHTML = `<input type="checkbox" /> 
    <span>${inputTask.value}</span> 
    <i class="fa-solid fa-circle-xmark delete-button"></i>`
    const checkbox = lieElement.querySelector("input[type= 'checkbox']");
    checkbox.addEventListener("change", () => {
        const taskText = lieElement.querySelector("span");
        taskText.style.textDecoration = checkbox.checked ? "line-through" : "none" 

    })

    const deleteButton = lieElement.querySelector(".delete-button");
    deleteButton.addEventListener("click", () => {
        todoList.removeChild(lieElement);
    })

    inputTask.value = ""
}

buttonAddTask.addEventListener("click", createTask)