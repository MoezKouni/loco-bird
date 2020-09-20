import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Content from "./Content";
import Home from "./Home";
import Settings from "./Settings";
import Sidebar from "./Sidebar";
import Login from "./Login";
import Register from "./Register";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Sidebar>
          <Route path="/home" component={Content} />
          <Route path="/settings" component={Settings} />
        </Sidebar>
      </Switch>
    </Router>
  );
};

export default App;
