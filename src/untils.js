/*
 * @Author: Aiden
 * @Date: 2020-09-10 23:34:29
 * @LastEditTime: 2020-09-19 00:30:37
 * @LastEditors: Aiden
 * @Description:
 */
/**
 * @description: 使用广度优先来进行树转换为数组扁平化操作
 * @params: tree{Array}
 * @return {Array}
 */
export function treeToList(tree) {
  let queen = [];
  let out = [];
  queen = queen.concat(tree);
  while (queen.length) {
    let first = queen.shift();
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
export function toTree(data, parId) {
  // console.log('list===========', list)
  let list = JSON.parse(JSON.stringify(data))
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

/**
 * @description: 通过广度优先搜索算法，对元素节点进行删除操作
 * @params: tree{Array}, node{Object}
 * @return {Array} 
 */
export function deleteNode(tree, node){
  let queue = []
  const out = []
  queue = queue.concat(tree)
  while(queue.length){
    let first = queue.shift()
    if(first.id === node.id){
      continue
    }
    if(first.children){
      queue = queue.concat(first.children);
      delete first["children"]
    }
    out.push(first)
  }
  return out
}
