/*
 * @Author: DaiLinBo
 * @Date: 2020-07-16 15:53:29
 * @LastEditTime: 2020-09-07 10:19:22
 * @LastEditors: Aiden
 * @Description:
 */

import "@babel/polyfill";
import React, { useRef } from "react";
import "antd/dist/antd.css";
import Node from "@/components";
import Header from "@/components/Header";
import data from "@/data.json";
// import Index from '../dist/index.js'
function TreeNode(props) {
  const dataTree = props.dataTree || data
  const canvasRef = useRef(null);
  return (
    <div ref={canvasRef}>
      <Header ref={canvasRef}></Header>
      <Node dataTree={dataTree}></Node>
    </div>
  );
}

export default TreeNode;
