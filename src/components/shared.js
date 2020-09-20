/*
 * @Author: Aiden
 * @Date: 2020-09-16 10:34:40
 * @LastEditTime: 2020-09-20 22:22:44
 * @LastEditors: Aiden
 * @Description:
 */
// import React, { useReducer } from "react";
import { treeToList, toTree, deleteNode, Stack } from "@/untils";

/**
 * @description: 观察者模式
 * @params:
 * @return {type}
 */
export const Observer = (function() {
  const _messages = {};
  return {
    subscribe: function(type, fn) {
      if (typeof _messages[type] === "undefined") {
        _messages[type] = [fn];
      } else {
        _messages[type].push(fn);
      }
    },
    unSubScribe: function(type, fn) {
      if (_messages[type] instanceof Array) {
        for (let i = _messages[type].length - 1; i >= 0; i--) {
          _messages[type][i] === fn && _messages[type].splice(i, 1);
        }
      }
    },
    dispatch: function(type, args) {
      if (!_messages[type]) return;
      const events = {
        type,
        args: args || {}
      };
      for (let i = 0; i < _messages[type].length; i++) {
        _messages[type][i].call(this, events);
      }
    }
  };
})();

const useDataShare = (() => {
  let data = [];
  let undoStack = new Stack();
  let redoStack = new Stack();
  const Action = {
    init: info => {
      data = Object.assign([], info);
      data = treeToList(data);
    },
    add: info => {
      const list = JSON.parse(JSON.stringify(data));
      undoStack.push(list);
      data.push(info);
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
      if (undoStack.data.length > 0) {
        const list = JSON.parse(JSON.stringify(data));
        redoStack.push(list);
        data = undoStack.pop();
        Action.retrieve();
      }
    },
    redo: () => {
      if (redoStack.data.length > 0) {
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
      undoStack: undoStack.data,
      redoStack: redoStack.data
    }
  };
})();

export { useDataShare };
