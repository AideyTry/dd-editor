/*
 * @Author: Aiden
 * @Date: 2020-09-01 16:40:59
 * @LastEditTime: 2021-04-15 10:29:56
 * @LastEditors: Aiden
 * @Description: This is the development environment used to test the public components of dd-editor.(这是开发环境用于测试dd-editor公共组件的.)
 */
import React from 'react'
import ReactDOM from 'react-dom'
import data from '@/data.json'

import DDEditor from '../src/index'
// import DDEditor from "../dist/index.js";
console.log('DDEditor==', DDEditor)

const NodeContainer = (info) => {
  console.log('info===', info)
  let renders = null
  switch (info.type) {
    case 1:
      renders = (
        <div>
          <select defaultValue="1" style={{ width: '120px' }}>
            <option value="1">{info.title}</option>
            <option value="2">jack22</option>
          </select>
          <input />
        </div>
      )
      break
    case 2:
      renders = (
        <div>
          <button>info.title</button>
        </div>
      )
      break
    default:
      renders = <input />
  }
  return renders
}

const uFn = newTreeData => {
  console.log('newTreeData=', newTreeData)
}

const Dev = () => {
  return (
    <React.Fragment>
      <DDEditor treeData={data} NodeContainer={NodeContainer} updateDataFn={uFn}></DDEditor>
    </React.Fragment>
  )
}

ReactDOM.render(<Dev />, document.getElementById('root')) //app即为挂载点，在模板html中。
