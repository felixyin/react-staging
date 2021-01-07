import React, { Component } from "react";
import { HashRouter, Route, Switch, Redirect } from "react-router-dom";
// 路由组件
import Home from "./pages/Home";
import Home2 from "./pages/Home2";
import About from "./pages/About";
// 一般组件
import Header from "./components/Header";

import "./index.css";
import MyNavLink from "./components/MyNavLink";

export default class Router1 extends Component {
  render() {
    // 一般BrowserRouter放置到App.jsx或index.jsx中
    return (
      <HashRouter>
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
                  <Switch>
                    {/* exact 精准匹配 */}
                    <Route exact path="/about" component={About} />
                    <Route path="/home" component={Home} />
                    {/* switch 单一匹配 */}
                    <Route path="/home" component={Home2} />
                    <Redirect to="/about" />
                  </Switch>
                </div>
              </div>
            </div>
          </div>
        </div>
      </HashRouter>
    );
  }
}
