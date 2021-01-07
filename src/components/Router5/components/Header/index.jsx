import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class Header extends Component {
  back = () => {
    this.props.history.goBack();
  };
  forward = () => {
    this.props.history.goForward();
  };
  render() {
    return (
      <div>
        <h2>React Router Demo</h2>
        <button onClick={this.back}>返回</button>
        <button onClick={this.forward}>前进</button>
      </div>
    );
  }
}

//  让一般组件也拥有路由组件的api，比如：history api
export default withRouter(Header);
