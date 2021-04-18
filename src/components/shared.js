/*
 * @Author: Aiden
 * @Date: 2020-09-16 10:34:40
 * @LastEditTime: 2021-04-18 22:16:15
 * @LastEditors: Aiden
 * @Description: Realize data communication and sharing.(实现数据通信和共享)
 */

import { treeToList, toTree, deleteNode, Stack, unique } from "./untils";

/**
 * @description: 观察者模式封装
 */
export const Observer = (function() {
  // 消息队列
  const _messages = {};
  return {
    // 订阅（注册）
    subscribe: function(type, fn) {
      // 如果消息不存在则英国创建一个消息
      if (typeof _messages[type] === "undefined") {
        _messages[type] = [fn];
      } else {
        // 将动作方法推入该消息对应的动作执行序列中，这样做的目的是保证多个模块注册统一则消息时能顺利执行
        _messages[type].push(fn);
      }
    },
    // 注销
    unSubScribe: function(type, fn) {
      if (_messages[type] instanceof Array) {
        for (let i = _messages[type].length - 1; i >= 0; i--) {
          _messages[type][i] === fn && _messages[type].splice(i, 1);
        }
      }
    },
    // 发布
    dispatch: function(type, args) {
      if (!_messages[type]) return;
      const events = {
        type, // 消息类型
        args: args || {} // 携带的参数
      };
      for (let i = 0; i < _messages[type].length; i++) {
        _messages[type][i].call(this, events);
      }
    }
  };
})();

/**
 * @description: 命令模式实现节点的增删以及undo/redo操作
 */
const useDataShare = (() => {
  let data = [];
  let undoStack = new Stack();
  let redoStack = new Stack();
  const Action = {
    init: info => {
      data = JSON.parse(JSON.stringify(Object.assign([], info)));
      data = treeToList(data);
    },
    add: info => {
      const list = JSON.parse(JSON.stringify(data));
      undoStack.push(list);
      console.log('undoStack=', undoStack)
      data.push(info);
      Action.retrieve();
    },
    update: info => {
      const list = JSON.parse(JSON.stringify(data));
      const newList = list.map(item => {
        if(item.id === info.id){
          return info
        } else {
          return item
        }
      })
      data = unique(newList)
      Action.retrieve();
    },
    delete: info => {
      const list = JSON.parse(JSON.stringify(data));
      undoStack.push(list);
      const newData = deleteNode(toTree(data, -1), info);
      data = newData;
      Action.retrieve();
    },
    undo: () => {
      if (!undoStack.isEmpty()) {
        const list = JSON.parse(JSON.stringify(data));
        redoStack.push(list);
        data = undoStack.pop();
        Action.retrieve();
      }
    },
    redo: () => {
      if (!redoStack.isEmpty()) {
        const list = JSON.parse(JSON.stringify(data));
        undoStack.push(list);
        data = redoStack.pop();
        Action.retrieve();
      }
    },
    retrieve: () => {
      const result = toTree(data, -1);
      Observer.dispatch("tree", { msg: result });
      return result;
    }
  };
  return {
    // 命令接口
    excute: function(msg) {
      if (!msg) {
        return;
      }
      if (msg.length) {
        for (let i = 0; i < msg.length; i++) {
          this(msg[i]);
        }
      } else {
        // msg.param =
        // Object.prototype.toString.call(msg.param) === "[object Array]"
        //   ? msg.param
        //   : [msg.param];
        Action[msg.command].call(Action, msg.param);
      }
    },
    stack: {
      undoStack,
      redoStack
    }
  };
})();

const useUpdated = (dataInfo) => {
  if(dataInfo.children){
    delete dataInfo.children
  }
  useDataShare.excute({ command: "update", param: dataInfo });
}

export { useDataShare, useUpdated };
