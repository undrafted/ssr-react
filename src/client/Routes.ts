import App from "./App";
import HomePage from "./pages/HomePage";
import UsersListPage from "./pages/UsersListPage";
import AdminsListPage from "./pages/AdminsListPage";
import NotFoundPage from "./pages/NotFoundPage";
import { RouteConfig } from "react-router-config";
export default (): RouteConfig[] => [
  {
    ...App,
    // @ts-ignore
    // TS cant figure out static route config StaticContext
    routes: [
      {
        ...HomePage,
        path: "/",
        exact: true
      },
      {
        ...UsersListPage,
        path: "/users"
      },
      {
        ...AdminsListPage,
        path: "/admins"
      },
      // switch-default Route
      {
        ...NotFoundPage
      }
    ]
  }
];
