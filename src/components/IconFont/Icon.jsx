import React, { forwardRef } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

const Icon = forwardRef((props, ref) => {
  const { className, children, ...restProps } = props;
  const classString = classNames(className);
  const renderInnerNode = () => {
    if (children) {
      return <svg style={{ height: "inherit", width: "inherit" }}>{children}</svg>;
    }
    return null;
  };
  return (
    <span {...restProps} className={classString} ref={ref}>
      {renderInnerNode()}
    </span>
  );
});
Icon.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};
export default Icon;
