// import logo from "./logo.svg";
import React, { Component } from "react";
import axios from "axios";
// import Todos from "./components/Todos";

export default class App extends Component {
  // Todos
  /*   render() {
    return  <Todos />;
  } */
  getStudentData = () => {
    axios.get("http://localhost:3000/api1/students").then(
      (response) => {
        console.log("获取学生数据：", response.data);
      },
      (error) => {
        console.log("失败了", error);
      }
    );
  };
  getCarData = () => {
    axios.get("http://localhost:3000/api2/cars").then(
      (response) => {
        console.log("获取车辆数据：", response.data);
      },
      (error) => {
        console.log("失败了", error);
      }
    );
  };
  render() {
    return (
      <div>
        <button type="button" onClick={this.getStudentData}>
          点我获取学生数据
        </button>
        <button type="button" onClick={this.getCarData}>
          点我获取车辆数据
        </button>
      </div>
    );
  }
}
