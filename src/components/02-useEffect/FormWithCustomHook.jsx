import React from "react";
import useForm from "../../hooks/useForm";
import "./effects.css";

const FormWithCustomHook = () => {
  const initialState = {
    name: "",
    email: "",
    password: "",
  };
  const [values, handleInputChange] = useForm(initialState);
  const { name, email, password } = values;

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ values });
  };
  return (
    <form onSubmit={handleSubmit}>
      <h1>FormWithCustomHook</h1>
      <div className="form-group">
        <input
          type="text"
          name="name"
          id="name"
          className="form-control"
          autoComplete="off"
          placeholder="Tu nombre"
          value={name}
          onChange={handleInputChange}
        />
      </div>
      <div className="form-group">
        <input
          type="email"
          name="email"
          id="email"
          className="form-control"
          placeholder="example@example.com"
          autoComplete="off"
          value={email}
          onChange={handleInputChange}
        />
      </div>
      <div className="form-group">
        <input
          type="password"
          name="password"
          id="password"
          className="form-control"
          placeholder="****"
          autoComplete="off"
          value={password}
          onChange={handleInputChange}
        />
      </div>
      <button className="btn btn-primary">Guardar</button>
    </form>
  );
};

export default FormWithCustomHook;
