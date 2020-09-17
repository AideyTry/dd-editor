/*
 * @Author: DaiLinBo
 * @Date: 2020-07-16 15:53:29
 * @LastEditTime: 2020-09-17 13:26:32
 * @LastEditors: Aiden
 * @Description:
 */

import "@babel/polyfill";
import React, { useRef } from "react";
import PropTypes from "prop-types";
import "antd/dist/antd.css";
import Node from "@/components";
import Header from "@/components/Header";
import data from "@/data.json";
function TreeNode(props) {
  const { NodeContainer, treeData } = props;
  const dataTree = treeData || data;
  const canvasRef = useRef(null);
  return (
    <div ref={canvasRef}>
      <Header ref={canvasRef}></Header>
      <Node dataTree={dataTree} NodeContainer={NodeContainer}></Node>
    </div>
  );
}
TreeNode.propTypes = {
  treeData: PropTypes.array,
  NodeContainer: PropTypes.func
};

export default TreeNode;
