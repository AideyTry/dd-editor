/*
 * @Author: Aiden
 * @Date: 2020-09-01 16:40:59
 * @LastEditTime: 2020-09-11 13:36:44
 * @LastEditors: Aiden
 * @Description:
 */
import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import { Select } from "antd";
import "antd/dist/antd.css";
import data from "@/data.json";
const { Option } = Select;

import TreeNode from "./index.js";
// import TreeNode from "../dist/index.js";

const NodeContainer = () => (
  <Select defaultValue="1" style={{ width: "120px" }} allowClear>
    <Option value="1">Lucy11</Option>
    <Option value="2">jack22</Option>
  </Select>
);

const Dev = () => {
  return (
    <React.Fragment>
      <TreeNode treeData={data} NodeContainer={NodeContainer}></TreeNode>
    </React.Fragment>
  );
};

ReactDOM.render(<Dev />, document.getElementById("root")); //app即为挂载点，在模板html中。
