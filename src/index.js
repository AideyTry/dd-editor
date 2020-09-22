/*
 * @Author: Aiden
 * @Date: 2020-07-16 15:53:29
 * @LastEditTime: 2020-09-22 17:58:59
 * @LastEditors: Aiden
 * @Description: This is the entrance, including the header toolbar and the node part.（这是入口，包含头部工具条和节点部分。）
 */

import "@babel/polyfill";
import React, { useRef, useState, useEffect } from "react";
import PropTypes from "prop-types";
import Node from "@/components";
import Header from "@/components/Header";
import data from "@/data.json";
import { useDataShare, Observer } from "@/components/shared";
function TreeNode(props) {
  const { NodeContainer, treeData, editorEnable } = props;
  const [dataTree, setDataTree] = useState(treeData);
  const canvasRef = useRef(null);
  useEffect(() => {
    useDataShare.excute({ command: "init", param: treeData });
    // 订阅tree的数据结构是否发生变化，如果发生了变化就及时更新整个树。
    Observer.subscribe("tree", e => {
      setDataTree(e.args.msg);
    });
  }, []);
  return (
    <div ref={canvasRef}>
      <Header ref={canvasRef}></Header>
      <Node
        dataTree={dataTree}
        NodeContainer={NodeContainer}
        editorEnable={editorEnable}
      ></Node>
    </div>
  );
}
TreeNode.propTypes = {
  treeData: PropTypes.array,
  editorEnable: PropTypes.bool,
  NodeContainer: PropTypes.func
};

TreeNode.defaultProps = {
  treeData: data,
  editorEnable: true,
  NodeContainer: info => (
    <select defaultValue="1" style={{ width: "90px" }}>
      <option value="1">{info.title}</option>
      <option value="2">jack22</option>
    </select>
  )
};

export default TreeNode;
