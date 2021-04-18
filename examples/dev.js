/*
 * @Author: Aiden
 * @Date: 2020-09-01 16:40:59
 * @LastEditTime: 2021-04-18 22:35:03
 * @LastEditors: Aiden
 * @Description: This is the development environment used to test the public components of dd-editor.(这是开发环境用于测试dd-editor公共组件的.)
 */
import React from 'react'
import ReactDOM from 'react-dom'
import data from '@/data.json'
import { Select, Input } from 'antd'
import 'antd/dist/antd.css'

import DDEditor, { useUpdated } from '../src/index'
// import DDEditor from "../dist/index.js";

const { Option } = Select

const NodeContainer = (info) => {
  console.log('info=', info)
  let renders = null
  const newInfo = Object.assign({}, info)

  const onChange = (value) => {
    newInfo.valueId = value
    // 数据改变的时候通过useUpdated传递修改的某个节点新数据过去
    useUpdated(newInfo)
  }
  switch (info.type) {
    case 1:
      renders = (
        <div>
          <Select
            defaultValue="1"
            style={{ width: '120px' }}
            onChange={onChange}
          >
            <Option value="1">{info.title}</Option>
            <Option value="2">jack22</Option>
            <Option value="3">mark</Option>
            <Option value="4">jim</Option>
          </Select>
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
    case 3:
      renders = (
        <div>
          <Select
            defaultValue="1"
            style={{ width: '120px' }}
            onChange={onChange}
          >
            <Option value="1">{info.title}</Option>
            <Option value="2">look</Option>
            <Option value="3">jason</Option>
            <Option value="4">mark</Option>
          </Select>
        </div>
      )
      break
    default:
      renders = <Input id={info.id} />
  }
  return renders
}

const uFn = (newTreeData) => {
  console.log('newTreeData=', newTreeData)
}

const Dev = () => {
  return (
    <React.Fragment>
      <DDEditor
        treeData={data}
        NodeContainer={NodeContainer}
        updateDataFn={uFn}
      ></DDEditor>
    </React.Fragment>
  )
}

ReactDOM.render(<Dev />, document.getElementById('root')) //app即为挂载点，在模板html中。
