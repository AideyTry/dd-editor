<!--
 * @Author: Aiden
 * @Date: 2020-09-14 09:48:16
 * @LastEditTime: 2020-09-22 15:55:14
 * @LastEditors: Aiden
 * @Description: 
-->
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

默认
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

NodeContainer{Function} = info => (
    <select defaultValue="1">
      <option value="1">{info.title}</option>
      <option value="2">jack22</option>
    </select>
  )

```