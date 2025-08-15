import { deleteTodo } from "./delete.todo.js";
import { ITodo } from "./main.js";

export const addTodo = (todo: ITodo) => {
  const tableBody = document.querySelector(
    "#tableTodo tbody"
  ) as HTMLTableSectionElement;

  const index = tableBody.rows.length + 1;

  const newRow = document.createElement("tr");
  newRow.innerHTML = `
     <tr>
            <th scope="row">${index}</th>
            <td>${todo.id}</td>
            <td>${todo.name}</td>
            <td>
                <button class="btn btn-danger delete-todo" data-id="${todo.id}">Delete</button>
            </td>
          </tr>
    `;

  tableBody.appendChild(newRow);

  deleteTodo();

  //@ts-ignore
  const toast = new bootstrap.Toast("#toast-success");
  toast.show();
};
