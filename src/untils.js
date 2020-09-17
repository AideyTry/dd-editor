/*
 * @Author: Aiden
 * @Date: 2020-09-10 23:34:29
 * @LastEditTime: 2020-09-15 17:58:57
 * @LastEditors: Aiden
 * @Description:
 */
/**
 * @description: 使用广度优先来进行树转换为数组扁平化操作
 * @params: tree{Array}
 * @return {Array}
 */
export function treeToList(tree) {
  var queen = [];
  var out = [];
  queen = queen.concat(tree);
  while (queen.length) {
    var first = queen.shift();
    if (first.children) {
      queen = queen.concat(first.children);
      delete first["children"];
    }

    out.push(first);
  }
  return out;
}

/**
 * @description: 数组转树，递归求解
 * @params: list{Array}, parId{Number}
 * @return {Array}
 */
export function toTree(list, parId) {
  let obj = {};
  let result = [];
  //将数组中数据转为键值对结构 (这里的数组和obj会相互引用)
  list.forEach(el => {
    obj[el.id] = el;
  });
  for (let i = 0, len = list.length; i < len; i++) {
    let id = list[i].parentId;
    if (id === parId) {
      result.push(list[i]);
    } else {
      if (obj[id].children) {
        obj[id].children.push(list[i]);
      } else {
        obj[id].children = [list[i]];
      }
    }
  }
  return result;
}
