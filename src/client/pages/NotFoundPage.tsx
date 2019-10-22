import React from "react";
import { Context } from "src";

// StaticRouter renames context -> staticContext

interface Props {
  staticContext: Context;
}
const NotFoundPage = ({ staticContext }: Props) => {
  staticContext.notFound = true;
  return <h1>Oops, page not found.</h1>;
};

export default {
  component: NotFoundPage
};
