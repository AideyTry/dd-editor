import React, { Fragment, useRef } from "react";
import PropTypes from "prop-types";
import IconFont from "@/components/IconFont";
import classNames from "classnames";
import { v4 as uuidv4 } from 'uuid';
import styles from "./index.less";
// import { treeToList, toTree } from "@/untils";
import { useDataShare } from "./shared";
const Node = props => {
  const { dataTree, NodeContainer, isChild } = props;
  const currentRef = useRef(null);
  const isLeaf = data => (data.children ? "" : "leaf-node");
  const onAdd = info => {
    // console.log('info=', info)
    // const newTree = treeToList(dataTree);
    // console.log("dataTree=", dataTree);
    // console.log("newTree=", newTree);
    // const toTreeData = toTree(newTree, -1);
    // console.log("toTree=", toTreeData);
    // console.log("useDataShare===", useDataShare.excute({ command: "add", param: [{e:3}] }));
    console.log('uuidv4()===', uuidv4())
    const singleData = {
      id: uuidv4().replace(/-/g, ''),
      parentId: info.id,
      name: uuidv4().replace(/-/g, '')
    }
    useDataShare.excute({ command: "add", param: singleData })
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
            <NodeContainer info={item.name}/>
            <IconFont
              type="icon-add"
              style={{ color: "#24803D" }}
              className={styles["icon-operating"]}
              onClick={() => onAdd(item)}
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

Node.propTypes = {
  dataTree: PropTypes.array,
  isChild: PropTypes.bool,
  NodeContainer: PropTypes.func
};

Node.defaultProps = {
  isChild: false
};

export default Node;
