import React, { Component } from "react";
import { nanoid } from "nanoid";
import PropTypes from "prop-types";
import "./index.css";

export default class Header extends Component {
  static propTypes = {
    addTodo: PropTypes.func.isRequired,
  };
  handleKeyUp = (event) => {
    const { keyCode, target } = event;
    // console.log(keyCode);
    if (keyCode !== 13) return;
    if (!target.value) return;
    // console.log(target.value);
    const { addTodo } = this.props; // 父组件中定义的changeTodo方法
    const todo = { id: nanoid(), name: target.value, done: false };
    addTodo(todo);
    target.value = "";
  };
  render() {
    return (
      <div className="todo-header">
        <input
          type="text"
          placeholder="请输入你的任务名称，按回车键确认"
          onKeyUp={this.handleKeyUp}
        />
      </div>
    );
  }
}
