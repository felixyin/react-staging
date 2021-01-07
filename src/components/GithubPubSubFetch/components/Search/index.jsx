import React, { Component } from "react";
import PubSub from "pubsub-js";

export default class Search extends Component {
  /**
   * search写法1: async+await+fetch+pubsub
   */
  search = async () => {
    // 连续结构赋值
    const {
      keywordRef: { /* :{}连续结构赋值 */ value: keyword /* :重命名 */ },
    } = this;

    // 发消息测试
    // PubSub.publish("github", keyword);

    PubSub.publish("github", { isFirst: false, isLoading: true });

    try {
      const response = await fetch(`/api3/search/users?q=${keyword}`); // github接口测试
      // const response = await fetch(`/api3/search/users2?q=${keyword}`); // 假数据接口测试，
      // const response = await fetch(`/api3/search/users3?q=${keyword}`); // 错误接口测试，会走else
      // 断网测试，devtools --》 network --》offline，会走catch

      if (response.ok) {
        // json方法是返回promise实例
        const data = await response.json();
        // 数据正常返回
        PubSub.publish("github", {
          isLoading: false,
          users: data.items,
        });
      } else {
        // 服务器返回状态码非200
        PubSub.publish("github", {
          isLoading: false,
          error: "服务器可以连接，但是发生错误：" + response.statusText,
        });
      }
    } catch (e) {
      // 网络错误
      PubSub.publish("github", {
        isLoading: false,
        error: "您没有连接网络，或服务器无法连接！",
      });
    }
  };

  /**
   * search方式2：promise
   */
  search2 = () => {
    const {
      keywordRef: { value: keyword },
    } = this;
    PubSub.publish("github", { isFirst: false, isLoading: true });
    fetch(`/api3/search/users3?q=${keyword}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        PubSub.publish("github", {
          isLoading: false,
          users: data.items,
        });
      })
      .catch((error) => {
        PubSub.publish("github", {
          isLoading: false,
          error: error.toString(),
        });
      });
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
