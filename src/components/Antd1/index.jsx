import React, { PureComponent } from "react";
import { Button, DatePicker, Space } from "antd";
import { WechatOutlined } from "@ant-design/icons";
import "antd/dist/antd.less";

const { RangePicker } = DatePicker;
export default class Antd1 extends PureComponent {
  onChange = (date, dateString) => {
    console.log(date, dateString);
  };
  render() {
    return (
      <div>
        A<button type="button">ok</button>
        <Button type="primary">Primary Button</Button>
        <Button type="ghost">ghost</Button>
        <Button type="link">link</Button>
        <WechatOutlined />
        <Space direction="vertical">
          <DatePicker onChange={this.onChange} />
          <RangePicker></RangePicker>
        </Space>
      </div>
    );
  }
}
