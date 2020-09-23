<!--
 * @Author: Aiden
 * @Date: 2020-09-14 09:48:16
 * @LastEditTime: 2020-09-23 10:43:35
 * @LastEditors: Aiden
 * @Description: 
-->

## 效果

![avatar](/public/images/treeNode.gif)

## 安装

```bash
npm install dd-editor --save
```

```bash
yarn add dd-editor
```


## 使用
  
```bash
import DDEditor from 'dd-editor'
<DDEditor treeData={data} NodeContainer={NodeContainer}></DDEditor>

 (1) 必填项
 NodeContainer{ReactNode}

（2）默认值
data{Array} = [
  {
    "id": 0,
    "parentId": -1,
    "name": "node",
    "children": [
      {
        "id": 1,
        "parentId": 0,
        "name": "node1",
        "children": [
          { "id": 111,     "parentId": 1, "name": "node111" },
          { "id": 112,     "parentId": 1, "name": "node112" }
        ]
      }
    ]
  }
]

editorEnable{boolean} = true   为true显示编辑，为false只是显示

```