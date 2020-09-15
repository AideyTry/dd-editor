/*
 * @Author: Aiden
 * @Date: 2020-09-10 23:34:29
 * @LastEditTime: 2020-09-14 22:53:52
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
  while(queen.length) {
      var first = queen.shift();
    if (first.children) {
        queen = queen.concat(first.children)
      delete first['children'];
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
export function toTree(list, id = 'id', pKey = 'parentId') {
  const arr = JSON.parse(JSON.stringify(list));
  const map = {};
  const tree = [];

  arr.forEach(item => {
    map[item[id]] = item;
  });

  arr.forEach(item => {
    const parent = map[item[pKey]];
    if (parent) {
      (parent.children || (parent.children = [])).push(item);
    } else {
      tree.push(item);
    }
  });

  return tree;

}
