import React from "react";
import ReactDOM from "react-dom";

// Router
import { BrowserRouter as Router } from "react-router-dom";

// Redux
import store from "./stores";
import { Provider } from "react-redux";

import App from "./components/App";

ReactDOM.render(
  <Router>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>,
  document.getElementById("root")
);
