/*
 * @Author: DaiLinBo
 * @Date: 2020-07-16 15:53:29
 * @LastEditTime: 2020-09-18 17:15:45
 * @LastEditors: Aiden
 * @Description:
 */

import "@babel/polyfill";
import React, { useRef, useState, useEffect } from "react";
import PropTypes from "prop-types";
import "antd/dist/antd.css";
import Node from "@/components";
import Header from "@/components/Header";
import data from "@/data.json";
import { useDataShare, Observer } from "@/components/shared";
function TreeNode(props) {
  const { NodeContainer, treeData } = props;
  const [dataTree, setDataTree] = useState(treeData || data)
  const canvasRef = useRef(null);
  useEffect(() => {
    console.log('treeData=====', treeData)
    useDataShare.excute({ command: "init", param: treeData })
    Observer.subscribe('tree', e => {
      console.log('e===', e.args.msg)
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
