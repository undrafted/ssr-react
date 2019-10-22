import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchUsers, FetchUsersAction } from "../actions";
import { Helmet } from "react-helmet";
import { Person } from "../lib/persons";
import { BindDispatch, MatchRouteThunk } from "../reducers";

type StateProps = {
  users: Person[];
  fetchUsers: typeof fetchUsers | MatchRouteThunk;
};

class UsersList extends Component<StateProps> {
  componentDidMount() {
    this.props.fetchUsers();
  }

  renderUsers() {
    return this.props.users.map(user => {
      return <li key={user.id}>{user.name}</li>;
    });
  }

  head() {
    return (
      <Helmet>
        <title>{`${this.props.users.length} Users Loaded`}</title>
        <meta property="og:type" content="Users App" />
      </Helmet>
    );
  }

  render() {
    return (
      <div>
        {this.head()}
        Here's a big list of users:
        <ul>{this.renderUsers()}</ul>
      </div>
    );
  }
}

function mapStateToProps({ users }: StateProps) {
  return {
    users
  };
}

type DispatchProps = {
  dispatch: BindDispatch<FetchUsersAction>;
};

function loadData({ dispatch }: DispatchProps) {
  // this will return a promise
  return dispatch(fetchUsers());
}

export default {
  loadData,
  component: connect(
    mapStateToProps,
    { fetchUsers }
  )(UsersList)
};
