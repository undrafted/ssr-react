import React from "react";
import { renderRoutes, RouteConfig } from "react-router-config";
import Header from "./components/Header";
import { fetchCurrentUser, FetchCurrentUserAction } from "./actions";
import { BindDispatch } from "./reducers";
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
  loadData: ({
    dispatch
  }: {
    dispatch: BindDispatch<FetchCurrentUserAction>;
  }) => dispatch(fetchCurrentUser())
};
