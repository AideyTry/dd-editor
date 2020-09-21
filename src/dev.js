/*
 * @Author: Aiden
 * @Date: 2020-09-01 16:40:59
 * @LastEditTime: 2020-09-21 14:01:08
 * @LastEditors: Aiden
 * @Description: This is the development environment used to test the public components of dd-editor.(这是开发环境用于测试dd-editor公共组件的.)
 */
import React from "react";
import ReactDOM from "react-dom";
import { Select } from "antd";
import "antd/dist/antd.css";
import data from "@/data.json";
const { Option } = Select;

import DDEditor from "./index.js";
// import DDEditor from "../dist/index.js";

const NodeContainer = info => (
  <Select defaultValue="1" allowClear>
    <Option value="1">{info.info}</Option>
    <Option value="2">jack22</Option>
  </Select>
);

const Dev = () => {
  return (
    <React.Fragment>
      <DDEditor treeData={data} NodeContainer={NodeContainer}></DDEditor>
    </React.Fragment>
  );
};

ReactDOM.render(<Dev />, document.getElementById("root")); //app即为挂载点，在模板html中。
