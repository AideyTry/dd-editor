import React, { Fragment, useState, useEffect } from 'react';
const AuthButton = props => {
  const { children, auth, disabled, authBtns } = props;
  console.log('props===', props)
  console.log('authBtns===', authBtns)
  debugger
  const isAuth = authBtns && authBtns.includes(auth);
  const [isShow, setIsShow] = useState(true);
  const son = {
    ...children,
    props: {
      ...children.props,
      disabled: isAuth ? false : disabled,
    },
  };
  useEffect(() => {
    if (disabled || isAuth) {
      setIsShow(true);
    } else {
      setIsShow(false);
    }
  }, [isAuth, disabled]);
  return <Fragment>{isShow && son}</Fragment>;
};
AuthButton.defautProps = {
  disabled: false,
  authBtns: ['001','002','btn001']
};
export default AuthButton;
