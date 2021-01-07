import React, { Component } from "react";
import PropTypes from "prop-types";
import "./index.css";

export default class Item extends Component {
  state = { isMouseOn: false };
  static propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    done: PropTypes.bool.isRequired,
    updateTodo: PropTypes.func.isRequired,
    deleteTodo: PropTypes.func.isRequired,
  };
  handleMouse = (flag) => {
    return (event) => {
      // console.log(flag);
      this.setState({ isMouseOn: flag });
    };
  };
  handleCheck = (id) => {
    return (event) => {
      // console.log(id, event.target.checked);
      this.props.updateTodo(id, event.target.checked);
    };
  };
  handleDelete = (id, event) => {
    if (window.confirm("确定要删除吗？")) {
      this.props.deleteTodo(id);
    }
  };
  render() {
    const { id, name, done } = this.props;
    const { isMouseOn } = this.state;
    return (
      <li
        onMouseLeave={this.handleMouse(false)}
        onMouseEnter={this.handleMouse(true)}
        style={{ backgroundColor: isMouseOn ? "#ddd" : "white" }}
      >
        <label>
          <input
            type="checkbox"
            checked={done}
            onChange={this.handleCheck(id)}
          />
          <span>{name}</span>
        </label>
        <button
          className="btn btn-danger"
          style={{ display: isMouseOn ? "block" : "none" }}
          onClick={(event) => {
            this.handleDelete(id, event);
          }}
        >
          删除
        </button>
      </li>
    );
  }
}
