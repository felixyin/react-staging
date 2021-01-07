import React, { Component } from "react";
import List from "./components/List";
import Search from "./components/Search";

export default class Github extends Component {
  state = {
    users: [], // list列表用户数据
    isFirst: true, // 是否第一次打开页面
    isLoading: false, // 是否加载中
    error: "", // 错误信息
  };
  updateAppState = (stateObj) => {
    this.setState(stateObj);
  };
  render() {
    return (
      <div className="container">
        <Search updateAppState={this.updateAppState} />
        <List {...this.state} />
      </div>
    );
  }
}
