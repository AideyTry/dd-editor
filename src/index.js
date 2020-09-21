/*
 * @Author: Aiden
 * @Date: 2020-07-16 15:53:29
 * @LastEditTime: 2020-09-21 14:21:49
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
  const { NodeContainer, treeData } = props;
  const [dataTree, setDataTree] = useState(treeData || data)
  const canvasRef = useRef(null);
  useEffect(() => {
    useDataShare.excute({ command: "init", param: treeData })
    // 订阅tree的数据结构是否发生变化，如果发生了变化就及时更新整个树。
    Observer.subscribe('tree', e => {
      setDataTree(e.args.msg)
    })
  }, [])
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
