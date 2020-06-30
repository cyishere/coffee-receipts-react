import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import HomePage from "./pages/HomePage";
import DreamsPage from "./pages/DreamsPage";
import "./App.scss";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/t/dreams" component={DreamsPage} />
        <Redirect to="/" />
      </Switch>
    </Router>
  );
}

export default App;
