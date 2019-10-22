import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchAdmins, FetchAdminsAction } from "../actions";
import requireAuth from "../components/hocs/requireAuth";
import { Person } from "../lib/persons";
import { BindDispatch } from "../reducers";

type StateProps = {
  fetchAdmins: typeof fetchAdmins;
  admins: Person[];
};

class AdminsList extends Component<StateProps> {
  componentDidMount() {
    this.props.fetchAdmins();
  }

  renderAdmins() {
    return this.props.admins.map(({ id, name }) => {
      return <li key={id}>{name}</li>;
    });
  }

  render() {
    return (
      <div>
        <h3>Protected list of admins</h3>
        <ul>{this.renderAdmins()}</ul>
      </div>
    );
  }
}

function mapStateToProps({ admins }: StateProps) {
  return { admins };
}

type DispatchProps = {
  dispatch: BindDispatch<FetchAdminsAction>;
};

function loadData({ dispatch }: DispatchProps) {
  // this will return a promise
  return dispatch(fetchAdmins());
}

export default {
  loadData,
  component: connect(
    mapStateToProps,
    { fetchAdmins }
  )(requireAuth(AdminsList))
};
