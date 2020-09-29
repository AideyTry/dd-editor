<!--
 * @Author: Aiden
 * @Date: 2020-09-14 09:48:16
 * @LastEditTime: 2020-09-29 14:19:08
 * @LastEditors: Aiden
 * @Description: 
-->
English | [简体中文](use.md)

## Effect

![avatar](/public/images/treeNode.gif)

## Installation

```bash
npm install dd-editor --save
```

```bash
yarn add dd-editor
```


## Usage
  
```bash
import DDEditor from 'dd-editor'
<DDEditor treeData={data} NodeContainer={NodeContainer}></DDEditor>

 (1) Required
 NodeContainer{ReactNode}

（2）Default
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

editorEnable{boolean} = true   
true is to edit, false is to display.

```