import "@babel/polyfill";
import express from "express";
import { matchRoutes } from "react-router-config";
import proxy from "express-http-proxy";
import Routes from "./client/Routes";
import renderer from "./helpers/renderer";
import createStore from "./helpers/createStore";
import { StaticRouterContext } from "react-router";
import { State } from "./client/reducers/adminsReducer";

const app = express();

export interface Context extends StaticRouterContext {
  notFound?: boolean;
}

app.use(
  "/api",
  proxy("http://react-ssr-api.herokuapp.com", {
    proxyReqOptDecorator(opts) {
      if (opts.headers) {
        // after oauth, redirect to localhost:3000
        opts.headers["x-forwarded-host"] = "localhost:3000";
      } else {
        throw new Error("Opts header is undefined");
      }
      return opts;
    }
  })
);
app.use(express.static("public"));

app.get("*", (req, res) => {
  const store = createStore(req);

  // to figure out which component to render based on the url
  // then call loadData in that component
  const promises = matchRoutes(Routes(), req.path)
    .map(({ route }) => (route.loadData ? route.loadData(store) : null))
    // kinda hacky - resolve promises no matter what
    // to prevent node from crashing
    // but this fails to log 401s now
    // TODO: fix this
    .map(promise => {
      if (promise) {
        return new Promise((resolve, reject) => {
          promise.then(resolve).catch(resolve);
        });
      }
    }) as Promise<State>[];

  //@ts-ignore
  Promise.all(promises).then(() => {
    const context: Context = {}; // this can now be filled up by server rendered components
    const content = renderer(req, store, context);

    // React-router automatically adds a url field to context
    // when <Redirect/> is being rendered
    if (context.url) {
      return res.redirect(301, context.url);
    }

    if (context.notFound) {
      res.status(404);
    }
    res.send(content);
  });
});

app.listen(3000, () => {
  console.log("Listening on port 3000");
});
