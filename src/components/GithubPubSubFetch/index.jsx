import React, { Component } from "react";
import List from "./components/List";
import Search from "./components/Search";

// https://github.com/mroderick/PubSubJS
export default class Github extends Component {
  render() {
    return (
      <div className="container">
        <Search />
        <List />
      </div>
    );
  }
}
