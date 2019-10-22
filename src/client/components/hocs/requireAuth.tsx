import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { Auth } from "src/client/lib/auth";

interface StateProps {
  auth: Auth | boolean;
}
export default (ChildComponent: React.ComponentClass<any>) => {
  class RequireAuth extends Component<StateProps> {
    render() {
      switch (this.props.auth) {
        case false:
          return <Redirect to="/" />;
        case null:
          return <div>Loading...</div>;
        default:
          return <ChildComponent {...this.props} />;
      }
    }
  }

  function mapStateToProps({ auth }: StateProps) {
    return { auth };
  }

  return connect(mapStateToProps)(RequireAuth);
};
