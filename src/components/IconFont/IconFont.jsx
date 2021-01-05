import React, { forwardRef } from "react";
import PropTypes from 'prop-types';
import Icon from "./Icon";
function createScriptUrlElements(scriptUrls, index = 0) {
  const currentScriptUrl = scriptUrls[index];
  const script = document.createElement("script");
  script.setAttribute("src", currentScriptUrl);
  script.setAttribute("data-namespace", currentScriptUrl);
  document.body.appendChild(script);
}
export default function create(options) {
  const { scriptUrl } = options;
  if (scriptUrl) {
    createScriptUrlElements([scriptUrl]);
  }
  const Iconfont = forwardRef((props, ref) => {
    const { type, children, ...restProps } = props;
    let content = null;
    if (type) {
      content = <use xlinkHref={`#${type}`} />;
    }
    if (children) {
      content = children;
    }
    return (
      <Icon {...restProps} ref={ref}>
        {content}
      </Icon>
    );
  });
  Iconfont.displayName = "Iconfont";
  Iconfont.propTypes = {
    type: PropTypes.string,
    children: PropTypes.node
  }
  return Iconfont;
}
