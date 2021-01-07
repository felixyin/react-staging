// import logo from "./logo.svg";
import React, { Component } from "react";
import "./index.css";
import Hello from "./components/Hello";
import Welcome from "./components/Welcome";

export default class HelloWorld extends Component {
  render() {
    return (
      <div>
        <Hello />
        <Welcome />
      </div>
    );
  }
}
