import React, { Component } from "react";

export default class Home extends Component {
  componentDidMount() {
    console.log(this.props);
  }
  render() {
    return <h3>我是Home的内容</h3>;
  }
}
