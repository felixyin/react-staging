import React, { Component } from "react";

export default class About extends Component {
  componentDidMount() {
    console.log(this.props);
  }
  render() {
    return <h3>我是About的内容</h3>;
  }
}
