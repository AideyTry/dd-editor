import React, { Fragment, useRef } from "react";
import IconFont from "@/components/IconFont";
import classNames from "classnames";
import styles from "./index.less";
import { treeToList, toTree } from "@/untils";
const Node = props => {
  const { dataTree, NodeContainer, isChild } = props;
  const currentRef = useRef(null);
  const isLeaf = data => (data.children ? "" : "leaf-node");
  const onAdd = () => {
    const newTree = treeToList(dataTree);
    console.log("dataTree=", dataTree);
    console.log("newTree=", newTree);
    const toTreeData = toTree(newTree, -1);
    console.log("toTree=", toTreeData);
    debugger;
  };
  const onDelete = () => {};
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
            <IconFont
              type="icon-clear"
              style={{ color: "#F4374C" }}
              className={styles["icon-operating"]}
              onClick={onDelete}
            />
            <NodeContainer />
            <IconFont
              type="icon-add"
              style={{ color: "#24803D" }}
              className={styles["icon-operating"]}
              onClick={onAdd}
            />
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

Node.defaultProps = {
  isChild: false
};

export default Node;
