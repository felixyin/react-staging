import React, { Component } from "react";
import PubSub from "pubsub-js";
import "./index.css";

export default class List extends Component {
  state = {
    users: [], // list列表用户数据
    isFirst: true, // 是否第一次打开页面
    isLoading: false, // 是否加载中
    error: "", // 错误信息
  };
  componentDidMount() {
    // 订阅消息
    this.token = PubSub.subscribe("github", (msg, data) => {
      // 收消息测试
      // console.log("list组件收到消息了", data);
      console.log("---------------0", msg);
      console.log("---------------1", data);
      this.setState(data);
    });
  }
  componentWillUnmount() {
    // 取消订阅
    PubSub.unsubscribe(this.token);
  }
  render() {
    const { isFirst, isLoading, error, users } = this.state;
    return (
      <div className="row">
        {isFirst ? (
          <h2>欢迎使用！</h2>
        ) : isLoading ? (
          <h2>加载中...</h2>
        ) : error ? (
          <h2>{error}</h2>
        ) : users.length <= 0 ? (
          <h2>没有数据</h2>
        ) : (
          users.map((user) => {
            return (
              <div className="card" key={user.id}>
                <a
                  href={user.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    alt="head_portrait"
                    src={user.avatar_url}
                    style={{ width: "100px" }}
                  />
                </a>
                <p className="card-text">{user.login}</p>
              </div>
            );
          })
        )}
      </div>
    );
  }
}
