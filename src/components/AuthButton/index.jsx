import React, { Fragment } from "react";
import PropTypes from "prop-types";
const AuthButton = (props) => {
  const { children, auth, authBtns } = props;
  const isAuth = authBtns.includes(auth);
  return <Fragment>{isAuth && children}</Fragment>;
};
AuthButton.propTypes = {
  children: PropTypes.node,
  auth: PropTypes.string.isRequired,
  authBtns: PropTypes.array.isRequired,
};
AuthButton.defautProps = {
  authBtns: ["001", "002", "btn001"],
};
export default AuthButton;
