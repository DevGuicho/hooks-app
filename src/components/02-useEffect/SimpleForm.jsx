import React, { useEffect, useState } from "react";
import "./effects.css";
import Message from "./Message";

const SimpleForm = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
  });

  const { name, email } = formState;

  useEffect(() => {
    console.log("Hey!");
  }, []);

  const handleInputChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <form>
      <h1>useEffect</h1>
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
      {name === "123" && <Message />}
    </form>
  );
};

export default SimpleForm;
