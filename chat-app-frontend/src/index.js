import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./test-components/App";
import Settings from "./test-components/Settings";
import Sidebar from "./test-components/Sidebar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import * as serviceWorker from "./serviceWorker";
import { Provider } from "react-redux";
import Store from "./Store";

ReactDOM.render(
  <Provider store={Store}>
    <Router>
      <Sidebar>
        <Switch>
          <Route exact path="/" component={App} />
          <Route path="/settings" component={Settings} />
        </Switch>
      </Sidebar>
    </Router>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
