// startup point for the client side application
import "@babel/polyfill";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import { renderRoutes } from "react-router-config";
import axios from "axios";
import Routes from "./Routes";
import reducers from "./reducers";

const axiosInstance = axios.create({
  baseURL: "/api"
});

const rootElem = document.getElementById("root") as HTMLElement;

let initialState = {};
try {
  if (rootElem.dataset && rootElem.dataset.initState) {
    initialState = JSON.parse(rootElem.dataset.initState);
  }
} catch (e) {
  throw new Error("cant load initial state");
}

const store = createStore(
  reducers,
  initialState,
  applyMiddleware(thunk.withExtraArgument(axiosInstance))
);

ReactDOM.hydrate(
  <Provider store={store}>
    <BrowserRouter>{renderRoutes(Routes())}</BrowserRouter>
  </Provider>,
  rootElem
);
