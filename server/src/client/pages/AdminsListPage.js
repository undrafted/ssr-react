import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchAdmins } from "../actions";
import requireAuth from "../components/hocs/requireAuth";

class AdminsList extends Component {
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

function mapStateToProps({ admins }) {
  return { admins };
}

function loadData({ dispatch }) {
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
