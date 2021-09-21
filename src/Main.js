import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ReactDOM from "react-dom";
import Toolbar from "./Toolbar";
import Welcome from "./Welcome";

const Main = () => {
  return (
    <div>
      <Router>
        <Toolbar />
        <Switch>
          <Route exact path="/">
            <Welcome />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

ReactDOM.render(<Main />, document.getElementById("root"));
