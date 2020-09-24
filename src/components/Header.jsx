import React, { Fragment, useReducer, forwardRef } from "react";
import "@/components/IconFont/iconfont.css";
import styles from "@/components/header.less";
import classNames from "classnames";
import { useDataShare } from "./shared";

function setZoom(ref, size) {
  ref.setAttribute(
    "style",
    `transform:scale(${size});transform-origin:left top;`
  );
}

const initialState = { count: 1 };

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      // eslint-disable-next-line no-case-declarations
      const counts = state.count + 0.1;
      setZoom(action.ref, counts);
      return { count: counts };
    case "decrement":
      // eslint-disable-next-line no-case-declarations
      const dCount = state.count - 0.1;
      if (dCount <= 0.1) {
        return { count: 0.1 };
      }
      setZoom(action.ref, dCount);
      return { count: dCount };
    case "preview":
      // eslint-disable-next-line no-case-declarations
      const { clientWidth, scrollWidth } = action.ref.current;
      // eslint-disable-next-line no-case-declarations
      let pCount = 1;
      if (state.count === 1) {
        pCount = clientWidth / scrollWidth;
      } else {
        pCount = 1;
      }
      setZoom(action.ref, pCount);
      return { count: pCount };
    default:
      throw new Error();
  }
}
const Header = forwardRef((props, canvasRef) => {
  const [cunter, cDispatch] = useReducer(reducer, initialState);
  console.log("cunter=", cunter);
  console.log('useDataShare===', useDataShare)
  const onZoomIn = () => {
    cDispatch({ type: "increment", ref: canvasRef.current.children[1] });
  };
  const onZoomOut = () => {
    cDispatch({ type: "decrement", ref: canvasRef.current.children[1] });
  };
  const undo = () => {
    useDataShare.excute({ command: "undo" });
  };
  const redo = () => {
    useDataShare.excute({ command: "redo" });
  };
  return (
    <Fragment>
      <header className={styles["header-wraper"]}>
        <span
          className={classNames(
            "iconfont",
            "icon-undo",
            styles["toolbar-icon"],
            useDataShare.stack.undoStack.count <= 0
              ? styles["toolbar-icon-default"]
              : ""
          )}
          onClick={undo}
        ></span>
        <span
          className={classNames(
            "iconfont",
            "icon-redo",
            styles["toolbar-icon"],
            useDataShare.stack.redoStack.count <= 0
              ? styles["toolbar-icon-default"]
              : ""
          )}
          onClick={redo}
        ></span>
        <span
          className={classNames(
            "iconfont",
            "icon-zoomin",
            styles["toolbar-icon"]
          )}
          onClick={onZoomIn}
        ></span>
        <span
          className={classNames(
            "iconfont",
            "icon-zoomout",
            styles["toolbar-icon"]
          )}
          onClick={onZoomOut}
        ></span>
      </header>
    </Fragment>
  );
});

export default Header;
