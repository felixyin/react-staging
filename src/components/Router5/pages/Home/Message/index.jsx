import React, { Component } from "react";
import { Link, Route } from "react-router-dom";
import Detail from "./Detail";

export default class Message extends Component {
  state = {
    messages: [
      { id: 1, title: "消息1" },
      { id: 2, title: "消息2" },
      { id: 3, title: "消息3" },
      { id: 4, title: "消息4" },
    ],
  };
  showPush = (m) => {
    // push+params
    // this.props.history.push(`/home/message/detail/${m.id}/${m.title}`);
    // push+search
    // this.props.history.push(`/home/message/detail?id=${m.id}&title=${m.title}`);
    // push+state
    this.props.history.push("/home/message/detail", m);
  };
  showReplace = (m) => {
    // replace+params
    // this.props.history.replace(`/home/message/detail/${m.id}/${m.title}`);
    // replace+search
    // this.props.history.replace(`/home/message/detail?id=${m.id}&title=${m.title}`);
    // replace+state
    this.props.history.replace("/home/message/detail", m);
  };
  goBack = () => {
    this.props.history.goBack();
  };
  goForward = () => {
    this.props.history.goForward();
  };
  render() {
    const { messages } = this.state;
    return (
      <div>
        <ul>
          {messages.map((m) => {
            return (
              <li key={m.id}>
                {/* 向路由组件传递params参数 */}
                {/* <Link to={`/home/message/detail/${m.id}/${m.title}`}> */}
                {/* 向路由组件传递search参数 */}
                {/* <Link to={`/home/message/detail?id=${m.id}&title=${m.title}`}> */}
                {/* 向路由组件传递state参数 */}
                <Link
                  to={{ pathname: `/home/message/detail`, state: { ...m } }}
                >
                  {m.title}
                </Link>
                &nbsp;&nbsp;
                <button type="button" onClick={(c) => this.showPush(m)}>
                  push查看
                </button>{" "}
                &nbsp;&nbsp;
                <button type="button" onClick={(c) => this.showReplace(m)}>
                  replace查看
                </button>
              </li>
            );
          })}
        </ul>
        <hr />
        {/* 声明接收params参数 */}
        {/* <Route path="/home/message/detail/:id/:title" component={Detail} /> */}
        {/* 声明接收search参数 无需声明接收*/}
        <Route path="/home/message/detail" component={Detail} />

        <button type="button" onClick={this.goBack}>
          后退
        </button>
        <button type="button" onClick={this.goForward}>
          前进
        </button>
      </div>
    );
  }
}
