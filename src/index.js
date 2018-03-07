import React from "react";
import { render } from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import "./index.css";
import App from "./components/App";
import reducer from "./reducers";
import data from "./data/properties.json";

import registerServiceWorker from "./registerServiceWorker";

const store = createStore(reducer, data);
render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
