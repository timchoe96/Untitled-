import React, { useEffect } from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Nav from "../Nav/Nav";
import Home from "../Home/Home";
import Journal from "../Journal/Journal";
import Entry from "../Entry/Entry";
import About from "../About/About";
import "./styles/style.css";

const App = () => {
  const dispatch = useDispatch();
  let journal = useSelector((state) => state.fetchJournal);
  useEffect(() => {
    if (journal === "") {
      fetch(
        `https://www.googleapis.com/blogger/v3/blogs/9085604028025620950/posts?key=AIzaSyChWrKyLjsVyYj42CKBstkjrOnKWwPLqDs`
      )
        .then((resp) => resp.json())
        .then((data) =>
          dispatch({
            type: "REQUEST_JOURNAL_SUCCESS",
            payload: data.items,
          })
        );
    }
  });

  return (
    <Router>
      <div className="gridContainer">
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/About" exact component={About} />
          <Route path="/Journal" exact component={Journal} />
          <Route path="/Journal/:id" exact component={Entry} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
