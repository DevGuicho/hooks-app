import React from "react";
import TodoListItem from "./TodoListItem";

const TodoList = ({ todos, handleDelete, handleToggle }) => {
  return (
    <div className="col-8">
      <table className="table table-striped table-hover">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Description</th>
            <th scope="col">Actions</th>
            <th scope="col">Complete</th>
          </tr>
        </thead>
        <tbody>
          {todos.map((todo, i) => (
            <TodoListItem
              key={todo.id}
              todo={todo}
              i={i}
              handleDelete={handleDelete}
              handleToggle={handleToggle}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TodoList;
