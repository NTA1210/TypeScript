const deleteTodoFromLocalStorage = (todoId) => {
    let todos = JSON.parse(localStorage.getItem("todos") || "[]");
    todos = todos.filter((todo) => todo.id !== todoId);
    localStorage.setItem("todos", JSON.stringify(todos));
};
export const deleteTodo = () => {
    const allDeleteBtn = document.querySelectorAll(".delete-todo");
    if (allDeleteBtn) {
        allDeleteBtn.forEach((btn, index) => {
            btn.addEventListener("click", () => {
                const todoId = btn.getAttribute("data-id");
                deleteTodoFromLocalStorage(Number(todoId));
                const row = btn.closest("tr");
                row?.remove();
                //@ts-ignore
                const toast = new bootstrap.Toast("#toast-delete");
                toast.show();
            });
        });
    }
};
