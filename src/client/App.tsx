import React from "react";
import { renderRoutes, RouteConfig } from "react-router-config";
import Header from "./components/Header";
import { fetchCurrentUser } from "./actions";
import { Dispatch } from "redux";
const App = ({ route }: RouteConfig) => {
  return (
    <div>
      <Header />
      {renderRoutes(route.routes)}
    </div>
  );
};

export default {
  component: App,
  loadData: ({ dispatch }: { dispatch: Dispatch }) =>
    dispatch(fetchCurrentUser())
};
