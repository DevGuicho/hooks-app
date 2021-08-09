import React, { useEffect, useReducer } from "react";
import todoReducer from "./todoReducer";
import "./styles.css";
import TodoList from "./TodoList";
import TodoAdd from "./TodoAdd";

const init = () => {
  /* return [{ id: new Date().getTime(), desc: "Aprender react", done: false }]; */
  return JSON.parse(localStorage.getItem("todos")) || [];
};

const TodoApp = () => {
  const [todos, dispatch] = useReducer(todoReducer, [], init);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleAddTodo = (desc) =>
    dispatch({
      type: "add",
      payload: {
        id: new Date().getTime(),
        desc,
        done: false,
      },
    });
  const handleDelete = (id) => {
    dispatch({
      type: "delete",
      payload: id,
    });
  };

  const handleToggle = (id) => {
    dispatch({
      type: "toggle",
      payload: id,
    });
  };

  return (
    <div className="container">
      <h1>Todo App ({todos.length}) </h1>
      <hr />
      <div className="row">
        <TodoList
          todos={todos}
          handleDelete={handleDelete}
          handleToggle={handleToggle}
        />
        <TodoAdd handleAddTodo={handleAddTodo} />
      </div>
    </div>
  );
};

export default TodoApp;
