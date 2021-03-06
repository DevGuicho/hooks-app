import React, { useContext } from "react";
import UserContex from "./UserContext";

const LoginScreen = () => {
  const { setUser } = useContext(UserContex);

  return (
    <div>
      <h1>Login Screen</h1>
      <hr />
      <button
        className="btn btn-primary"
        onClick={() => setUser({ id: 1234, name: "Luis Vazquez" })}
      >
        Login
      </button>
    </div>
  );
};

export default LoginScreen;
