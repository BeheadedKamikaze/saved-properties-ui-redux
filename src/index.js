import React from "react";
import { render } from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider } from "react-redux";
import "./index.css";
import App from "./components/App";
import reducer from "./reducers";
import data from "./data/properties.json";

import registerServiceWorker from "./registerServiceWorker";

const composeEnhancers = composeWithDevTools({
  // stuff here
});
const store = createStore(reducer, data, composeEnhancers(
  // ...applyMiddleware(...middleware),
));
render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
