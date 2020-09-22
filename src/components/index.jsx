/*
 * @Author: Aiden
 * @Date: 2020-09-17 14:13:28
 * @LastEditTime: 2020-09-22 14:52:53
 * @LastEditors: Aiden
 * @Description: This is a common component of the spanning tree node.(这是生成树节点公共组件)
 */
import React, { Fragment, useRef } from "react";
import PropTypes from "prop-types";
import "@/components/IconFont/iconfont.css";
import classNames from "classnames";
import { v4 as uuidv4 } from "uuid";
import styles from "./index.less";
import { useDataShare } from "./shared";
const Node = props => {
  const { dataTree, NodeContainer, isChild } = props;
  const currentRef = useRef(null);
  const isLeaf = data => (data.children ? "" : "leaf-node");
  /**
   * @description: 增加节点
   * @params: info{Object}
   * @return {undefined} 
   */
  const onAdd = info => {
    const singleData = {
      id: uuidv4().replace(/-/g, ""),
      parentId: info.id,
      name: uuidv4().replace(/-/g, "")
    };
    // 执行命令行，添加节点
    useDataShare.excute({ command: "add", param: singleData });
  };
  /**
   * @description: 删除节点
   * @params: info{Object}
   * @return {undefined} 
   */
  const onDelete = info => {
    // 执行命令行删除节点
    useDataShare.excute({ command: "delete", param: info });
  };
  return (
    <Fragment>
      {dataTree.map(item => (
        <div
          key={item.id}
          className={classNames(
            isChild
              ? styles["process-tree-childNodes-row"]
              : styles["process-tree-roots"],
            dataTree.length > 1 ? styles["process-tree-childNodes-height"] : ""
          )}
        >
          <span
            className={classNames(
              styles["process-tree-node"],
              styles[`${isLeaf(item)}`]
            )}
          >
            <span
              style={{ color: "#F4374C" }}
              className={classNames(
                "iconfont",
                "icon-clear",
                styles["icon-operating"]
              )}
              onClick={() => onDelete(item)}
            ></span>
            <NodeContainer title={item.name} />
            <span
              style={{ color: "#24803D" }}
              className={classNames(
                "iconfont",
                "icon-add",
                styles["icon-operating"]
              )}
              onClick={() => onAdd(item)}
            ></span>
          </span>
          {item.children && (
            <div
              ref={currentRef}
              className={classNames(
                styles["process-tree-childNodes"],
                item.children.length > 1
                  ? styles["multiply-node"]
                  : styles["single-node"]
              )}
            >
              <Node
                dataTree={item.children}
                NodeContainer={NodeContainer}
                isChild
              />
            </div>
          )}
        </div>
      ))}
    </Fragment>
  );
};

Node.propTypes = {
  dataTree: PropTypes.array,
  isChild: PropTypes.bool,
  NodeContainer: PropTypes.func
};

Node.defaultProps = {
  isChild: false
};

export default Node;
