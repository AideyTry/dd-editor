import React, { Fragment } from "react";
import classNames from 'classnames'

import styles from "./index.less";
const Node = props => {
  // const data = [];
  return (
    <Fragment>
      <div className={styles["process-tree-roots"]}>
        <span className={classNames(styles['process-tree-node'], styles['leaf-node'])}>
          node1
        </span>
      </div>
    </Fragment>
  );
};

export default Node;
