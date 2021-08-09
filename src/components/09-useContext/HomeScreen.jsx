import React, { useContext } from "react";
import UserContex from "./UserContext";

const HomeScreen = () => {
  const userContext = useContext(UserContex);
  console.log(userContext);
  return (
    <div>
      <h1>Home Screen</h1>
      <hr />
    </div>
  );
};

export default HomeScreen;
