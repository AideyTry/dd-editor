import React, { Fragment, useRef } from "react";
import { Select } from "antd";
import IconFont from '@/components/IconFont'
import styles from './header.less'

const Header = props => {
  return<Fragment>
    <header className={styles['header-wraper']}>
      <IconFont type="icon-zoomin"/>
      <IconFont type="icon-zoomout"/>
    </header>
  </Fragment>
}

export default Header