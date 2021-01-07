import axios from "axios";
import React, { Component } from "react";

export default class Search extends Component {
  search = () => {
    // 连续结构赋值
    const {
      keywordRef: { /* :{}连续结构赋值 */ value: keyword /* :重命名 */ },
    } = this;
    const { updateAppState } = this.props;

    updateAppState({ isFirst: false, isLoading: true });
    axios.get(`/api3/search/users?q=${keyword}`).then(
      (response) => {
        updateAppState({
          isLoading: false,
          users: response.data.items,
        });
      },
      (error) => {
        updateAppState({ isLoading: false, error: error.message });
      }
    );
  };
  render() {
    return (
      <section className="jumbotron">
        <h3 className="jumbotron-heading">搜索github用户</h3>
        <div>
          <input
            ref={(c) => (this.keywordRef = c)}
            type="text"
            placeholder="输入关键字点击搜索"
          />
          <button onClick={this.search}>搜索</button>
        </div>
      </section>
    );
  }
}
