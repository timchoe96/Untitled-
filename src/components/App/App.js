import React, { useEffect } from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import Nav from "../Nav/Nav";
import Home from "../Home/Home";
import Journal from "../Journal/Journal";
import Entry from "../Entry/Entry";
import About from "../About/About";
import Images from "../Images/Images";
import { getBlog } from "../../actions/index.js";
import "./styles/style.css";

const App = () => {
  const dispatch = useDispatch();
  // let journal = useSelector((state) => state.fetchJournal);

  useEffect(() => {
    dispatch(getBlog());
  }, [dispatch]);

  return (
    <Router>
      <div className="gridContainer">
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/About" exact component={About} />
          <Route path="/Journal" exact component={Journal} />
          <Route path="/Journal/:id" exact component={Entry} />
          <Route path="/Images" exact component={Images} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
