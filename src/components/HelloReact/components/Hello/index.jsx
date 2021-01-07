import React, { PureComponent } from "react";
import CssHello from "./index.module.css";

class Hello extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return <h2 className={CssHello.title}>hello react！！</h2>;
  }
}

export default Hello;
