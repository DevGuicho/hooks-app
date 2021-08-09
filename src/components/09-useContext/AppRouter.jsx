import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import AboutScreen from "./AboutScreen";
import HomeScreen from "./HomeScreen";
import LoginScreen from "./LoginScreen";
import NavBar from "./NavBar";
import NotFoundScreen from "./NotFoundScreen";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <div>
        <NavBar />
        <Switch>
          <Route exact path="/" component={HomeScreen} />
          <Route exact path="/about" component={AboutScreen} />
          <Route exact path="/login" component={LoginScreen} />
          <Route component={NotFoundScreen} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default AppRouter;
