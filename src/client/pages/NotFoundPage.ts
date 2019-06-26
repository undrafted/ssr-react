import React from "react";

// StaticRouter renames context -> staticContext
// this prop is only for StaticRouter (server rendered components)
const NotFoundPage = ({ staticContext = {} }) => {
  staticContext.notFound = true;
  return <h1>Oops, page not found.</h1>;
};

export default {
  component: NotFoundPage
};
