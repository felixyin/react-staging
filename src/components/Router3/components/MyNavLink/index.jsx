import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class MyNavLink extends Component {
  render() {
    // const { children } = this.props;
    console.log(this.props);
    return (
      <NavLink
        className="list-group-item"
        activeClassName="gao_liang"
        {...this.props}
      >
        {/* {children} */}
      </NavLink>
    );
  }
}
