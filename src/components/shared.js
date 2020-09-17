/*
 * @Author: Aiden
 * @Date: 2020-09-16 10:34:40
 * @LastEditTime: 2020-09-16 17:09:57
 * @LastEditors: Aiden
 * @Description:
 */
import React, { useReducer } from "react";
const useDataShare = (() => {
  const data = []
  data = 3883388
  const Action = {
    init: info => {
      data = Object.assign([], info)
    },
    add: (info) => {
      
    },
    delete: info => {

    },
    retrieve: () => {}
  }
  return {
    // 命令接口
    excute: msg => {
      if(!msg){
        return
      }
      if(msg.length){
        for(let i = 0; i < msg.length; i++){
          this(msg[i]);
        }
      } else {
        Object.prototype.toString.call(msg.param) === '[object Array]' ? msg.param : [msg.param];
        Action[msg.command].apply(Action, msg.param)
      }
    }
  }
})()
