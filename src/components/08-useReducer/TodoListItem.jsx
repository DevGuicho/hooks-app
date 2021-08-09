import React from "react";

const TodoListItem = ({ todo, i, handleDelete, handleToggle }) => {
  return (
    <tr className={todo.done ? "table-success" : ""} key={todo.id}>
      <th scope="row">{i + 1}</th>
      <td id="desc">{todo.desc}</td>
      <td>
        <button
          type="button"
          className="btn btn-danger"
          onClick={() => handleDelete(todo.id)}
        >
          Borrar
        </button>
      </td>
      <td>
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckChecked"
            onChange={() => handleToggle(todo.id)}
            checked={todo.done}
          />
        </div>
      </td>
    </tr>
  );
};

export default TodoListItem;
