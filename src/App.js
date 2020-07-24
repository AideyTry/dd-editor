/*
 * @Author: DaiLinBo
 * @Date: 2020-07-16 15:53:29
 * @LastEditTime: 2020-07-24 15:38:44
 * @LastEditors: DaiLinBo
 * @Description:
 */

import React from "react";
// import logo from './logo.svg';
// import './App.css';
import Node from "./components";

function App() {
  const dataTree = [
    {
      id: -1,
      name: "node",
      children: [
        { id: 1, name: "node1", children: [
          {id: 111, name: "node111"},
          {id: 112, name: "node112"}
        ] },
        { id: 2, name: "node2", children: [
          {id: 21, name: "node21"},
          {id: 22, name: "node22"}
        ]},
        { id: 3, name: "node3", children: [{ id: 31, name: "node3-1" }] },
        {
          id: 4,
          name: "node4",
          children: [
            {
              id: 41,
              name: "node4-1",
              children: [{ id: 411, name: "node4-11" }]
            },
            { id: 42, name: "node4-2" },
            { id: 43, name: "node4-3", children: [
              { id: 431, name: "node4-3-1" },
              { id: 432, name: "node4-3-2" }
            ] }
          ]
        }
      ]
    }
  ];
  return (
    <div>
      <Node dataTree={dataTree}></Node>
    </div>
  );
}

export default App;
