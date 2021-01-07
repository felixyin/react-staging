import React, { Component } from "react";
import qs from "querystring";

const STATIC_DATA = [
  { id: 1, content: "我是内容1" },
  { id: 2, content: "我是内容2" },
  { id: 3, content: "我是内容3" },
  { id: 4, content: "我是内容4" },
];
export default class Detail extends Component {
  commonFindData(param) {
    console.log(param);
    if (!param || !param.id) return {};
    const data = STATIC_DATA.find((d) => {
      return String(d.id) === String(param.id);
    });
    return { ...data, title: param.title };
  }
  getFromParams() {
    return this.commonFindData(this.props.match.params);
  }
  getFromSearch() {
    const param = qs.parse(this.props.location.search.slice(1)); // search字符串转对象
    return this.commonFindData(param);
  }
  getFromState() {
    return this.commonFindData(this.props.location.state);
  }
  render() {
    let data;

    // 接收params参数
    // data = this.getFromParams();

    // 接收search参数
    // data = this.getFromSearch();

    // 接收state参数
    data = this.getFromState();

    return (
      <ul>
        <li>ID:{data.id}</li>
        <li>title:{data.title}</li>
        <li>content:{data.content}</li>
      </ul>
    );
  }
}
