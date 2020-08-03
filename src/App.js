/*
 * @Author: DaiLinBo
 * @Date: 2020-07-16 15:53:29
 * @LastEditTime: 2020-08-03 23:33:58
 * @LastEditors: DaiLinBo
 * @Description:
 */

import React from "react";
import 'antd/dist/antd.css'
import Node from "./components";
import Header from './components/Header'
import data from "./data.json";
function App() {
  const dataTree = data;
  console.log("dataTree=", dataTree);
  for (let i = 100; i < 200; i++) {
    dataTree[0].children[3].children.push({ id: i, name: `node${i}` });
  }
  return (
    <div>
      <Header></Header>
      <Node dataTree={dataTree}></Node>
    </div>
  );
}

export default App;
