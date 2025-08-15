import { addTodo } from "./add.todo.js";
import { deleteTodo } from "./delete.todo.js";
import { getRandomInt } from "./helper.js";
import { displayTable } from "./table.todo.js";
const btnElement = document.getElementById("btnCreateTodo");
const inputElement = document.getElementById("todoName");
function saveToLocalStorage(value) {
    const todos = JSON.parse(localStorage.getItem("todos") || "[]");
    localStorage.setItem("todos", JSON.stringify([...todos, value]));
    //update table
}
btnElement?.addEventListener("click", () => {
    if (inputElement?.value) {
        const name = inputElement?.value;
        //save todo
        const newTodo = {
            id: getRandomInt(1, 1000000),
            name,
        };
        saveToLocalStorage(newTodo);
        addTodo(newTodo);
        //close modal
        //@ts-ignore
        const createTodoModal = bootstrap.Modal.getOrCreateInstance("#createTodo", {
            keyboard: false,
        });
        createTodoModal.hide();
        //clear input
        inputElement.value = "";
    }
});
displayTable();
deleteTodo();
// Toast
