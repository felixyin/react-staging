import React, { Component } from "react";

export default class News extends Component {
  componentDidMount() {
    const st = setTimeout(() => {
      this.props.history.push("/home/message/");
    }, 3000);
    this.st = st;
  }
  componentWillUnmount() {
    clearTimeout(this.st);
  }
  render() {
    return (
      <ul>
        <li>news001</li>
        <li>news002</li>
        <li>news003</li>
      </ul>
    );
  }
}
