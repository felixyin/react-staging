import React, { PureComponent } from "react";
import "./index.css";

class Welcome extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return <h2 className="title">Welcome!!</h2>;
  }
}

export default Welcome;
