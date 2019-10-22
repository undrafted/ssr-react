import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { Helmet } from "react-helmet";
import { renderRoutes } from "react-router-config";
import Routes from "../client/Routes";
import { StaticRouterContext } from "react-router";
import { Store } from "redux";
import { Request } from "express";

export default (req: Request, store: Store, context: StaticRouterContext) => {
  const content = renderToString(
    <div id="root" data-init-state={JSON.stringify(store.getState())}>
      <Provider store={store}>
        <StaticRouter location={req.path} context={context}>
          {renderRoutes(Routes())}
        </StaticRouter>
      </Provider>
    </div>
  );

  const helmet = Helmet.renderStatic();

  return `
    <html>
      <head>
        ${helmet.title.toString()}
        ${helmet.meta.toString()}
      </head>
      <body>
        ${content}
        <script src="bundle.js"></script>
      </body>
    </html>
  `;
};
