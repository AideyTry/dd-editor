import React, { Fragment, useReducer, forwardRef } from "react";
import IconFont from "@/components/IconFont";
import styles from "./header.less";

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
  const onZoomIn = () => {
    cDispatch({ type: "increment", ref: canvasRef.current.children[1] });
  };
  const onZoomOut = () => {
    cDispatch({ type: "decrement", ref: canvasRef.current.children[1] });
  };
  return (
    <Fragment>
      <header className={styles["header-wraper"]}>
        <IconFont
          type="icon-undo"
          className={styles["toolbar-icon"]}
          onClick={onZoomOut}
        />
        <IconFont
          type="icon-redo"
          className={styles["toolbar-icon"]}
          onClick={onZoomIn}
        />
        <IconFont
          type="icon-zoomin"
          className={styles["toolbar-icon"]}
          onClick={onZoomIn}
        />
        <IconFont
          type="icon-zoomout"
          className={styles["toolbar-icon"]}
          onClick={onZoomOut}
        />
      </header>
    </Fragment>
  );
});

export default Header;
