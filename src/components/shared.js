/*
 * @Author: Aiden
 * @Date: 2020-09-16 10:34:40
 * @LastEditTime: 2020-09-18 18:11:29
 * @LastEditors: Aiden
 * @Description:
 */
// import React, { useReducer } from "react";
import { treeToList, toTree } from "@/untils";

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
  const Action = {
    init: info => {
      console.log("init===", info);
      data = Object.assign([], info);
      data = treeToList(data);
      console.log('data tree=', data)
    },
    add: info => {
      console.log('add info=', info)
      console.log('data===============', data)
      data.push(info);
      Action.retrieve()
    },
    delete: info => {
      data.push(info);
    },
    retrieve: () => {
     const result = toTree(data, -1);
     console.log('msg tree=', result)
      Observer.dispatch("tree", { msg: result });
      // data = treeToList(result);
      return result;
    }
  };
  return {
    // 命令接口
    excute: function(msg) {
      console.log('msg===', msg)
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
    }
  };
})();

export { useDataShare };
