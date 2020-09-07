/*
 * @Author: Aiden
 * @Date: 2020-09-01 16:40:59
 * @LastEditTime: 2020-09-07 15:07:52
 * @LastEditors: Aiden
 * @Description: 
 */
import React from 'react';
import ReactDOM from 'react-dom';
import data from "@/data.json";

// 自定义的组件
// import Index from "./index.js";
import Index from '../dist/index.js'

const Dev = () => {
  return <React.Fragment>
    <Index dataTree={data}></Index>
  </React.Fragment>
}

ReactDOM.render(<Dev />, document.getElementById('root')); //app即为挂载点，在模板html中。