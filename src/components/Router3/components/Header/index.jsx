import React, { Component } from "react";

export default class Header extends Component {
  componentDidMount() {
    console.log(this.props);
  }
  render() {
    return <h2>React Router Demo</h2>;
  }
}
