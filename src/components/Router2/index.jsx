import React, { Component } from "react";
import { BrowserRouter, NavLink, Route } from "react-router-dom";
// 路由组件
import Home from "./pages/Home";
import About from "./pages/About";
// 一般组件
import Header from "./components/Header";

import "./index.css";
import MyNavLink from "./components/MyNavLink";

export default class Router1 extends Component {
  render() {
    // 一般BrowserRouter放置到App.jsx或index.jsx中
    return (
      <BrowserRouter>
        <div>
          <div className="row">
            <div className="col-xs-offset-2 col-xs-8">
              <div className="page-header">
                <Header />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xs-2 col-xs-offset-2">
              <div className="list-group">
                {/* 原生html中跳转方式 */}
                {/* <a className="list-group-item" href="./about.html"> About </a> */}
                {/* <a className="list-group-item active" href="./home.html"> Home </a> */}
                {/* 在React中靠路由链接实现切换组件（页面） */}
                {/* 编写路由链接 */}
                <MyNavLink to="/about" b="23">
                  About
                </MyNavLink>
                <MyNavLink to="/home">Home</MyNavLink>
              </div>
            </div>
            <div className="col-xs-6">
              <div className="panel">
                <div className="panel-body">
                  {/* 注册路由 */}
                  <Route path="/about" component={About} />
                  <Route path="/home" component={Home} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}
