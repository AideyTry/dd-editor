import React, { Fragment, useRef } from "react";
import { Select } from "antd";
// import 'antd/dist/antd.css'
import classNames from "classnames";

import styles from './index.less';
const { Option } = Select;
const Node = props => {
  const { dataTree, isChild } = props;
  const currentRef = useRef(null);
  const isLeaf = data => (data.children ? "" : "leaf-node");
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
            {/* {item.name} */}
            <Select defaultValue="lucy" style={{ width: '120px' }} allowClear>
              <Option value="lucy">Lucy</Option>
              <Option value="jack">jack</Option>
            </Select>
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
              <Node dataTree={item.children} isChild />
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
