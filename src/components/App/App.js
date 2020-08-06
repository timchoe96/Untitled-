import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import Nav from "../Nav/Nav";
import Home from "../Home/Home";
import "./styles/style.css";

const App = () => {
  return (
    <Router>
      <div className="gridContainer">
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
