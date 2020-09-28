/*
 * @Author: Aiden
 * @Date: 2020-09-01 16:40:59
 * @LastEditTime: 2020-09-28 18:01:05
 * @LastEditors: Aiden
 * @Description: This is the development environment used to test the public components of dd-editor.(这是开发环境用于测试dd-editor公共组件的.)
 */
import React from "react";
import ReactDOM from "react-dom";
import data from "@/data.json";

import DDEditor from "../src/index.js";
// import DDEditor from "../dist/index.js";

const NodeContainer = info => (
  <select defaultValue="1" style={{ width: "120px" }}>
    <option value="1">{info.title}</option>
    <option value="2">jack22</option>
  </select>
  // <span>{info.title}</span>
);

const Dev = () => {
  return (
    <React.Fragment>
      <DDEditor treeData={data} NodeContainer={NodeContainer}></DDEditor>
    </React.Fragment>
  );
};

ReactDOM.render(<Dev />, document.getElementById("root")); //app即为挂载点，在模板html中。
