import React, { useContext } from "react";
import UserContex from "./UserContext";

const AboutScreen = () => {
  const { user, setUser } = useContext(UserContex);
  return (
    <div>
      <h1>About screen</h1>
      <hr />
      <pre>{JSON.stringify(user, null, 3)}</pre>
      <button className="btn btn-danger" onClick={() => setUser({})}>
        Logout
      </button>
    </div>
  );
};

export default AboutScreen;
