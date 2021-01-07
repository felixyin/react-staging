import React, { Component } from "react";
import "./index.css";

export default class List extends Component {
  render() {
    const { isFirst, isLoading, error, users } = this.props;
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
