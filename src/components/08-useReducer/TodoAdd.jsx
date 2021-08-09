import React, { useState } from "react";

const TodoAdd = ({ handleAddTodo }) => {
  const [inputValue, setInputValue] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();

    if (inputValue.trim().length > 1) {
      handleAddTodo(inputValue);
      setInputValue("");
    }
  };
  return (
    <div className="col-4">
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <h6 className="form-label">Agregar Todo</h6>
          <input
            type="text"
            name="description"
            autoComplete="off"
            className="form-control"
            id="description"
            onChange={(e) => setInputValue(e.target.value)}
            value={inputValue}
          />
        </div>

        <div className="d-grid">
          <button type="submit" className="btn btn-primary">
            Agregar
          </button>
        </div>
      </form>
    </div>
  );
};

export default TodoAdd;
