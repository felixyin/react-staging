import React, { Component } from "react";
import { Link, Route } from "react-router-dom";
import Detail from "./pages/Detail";

export default class Message extends Component {
  state = {
    messages: [
      { id: 1, title: "消息1" },
      { id: 2, title: "消息2" },
      { id: 3, title: "消息3" },
      { id: 4, title: "消息4" },
    ],
  };
  render() {
    return (
      <div>
        <ul>
          {this.state.messages.map((m) => {
            return (
              <li key={m.id}>
                {/* 向路由组件传递params参数 */}
                {/* <Link to={`/home/message/detail/${m.id}/${m.title}`}> */}
                {/* 向路由组件传递search参数 */}
                {/* <Link to={`/home/message/detail?id=${m.id}&title=${m.title}`}> */}
                {/* 向路由组件传递state参数 */}
                <Link
                  to={{
                    pathname: `/home/message/detail`,
                    state: { ...m },
                  }}
                >
                  {m.title}
                </Link>
                &nbsp;&nbsp;
              </li>
            );
          })}
        </ul>
        <hr />
        {/* 声明接收params参数 */}
        {/* <Route path="/home/message/detail/:id/:title" component={Detail} /> */}
        {/* 声明接收search参数 无需声明接收*/}
        <Route path="/home/message/detail" component={Detail} />
      </div>
    );
  }
}
