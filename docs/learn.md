<!--
 * @Author: Aiden
 * @Date: 2020-09-14 09:49:46
 * @LastEditTime: 2020-09-28 17:27:02
 * @LastEditors: Aiden
 * @Descripti
-->
[English](learn.en-US.md) | 简体中文

## 1、数据结构
```bash
dd-editor中除用到的数组、对象数据结构外还用到了树、堆栈、队列
```
###  (1)、树
```bash
一个树结构包含一系列存在父子关系的节点。每个节点都有一个父节点（除了顶部的第一个节点）以及零个或多个子节点：
位于树顶部的节点叫作根节点,没有子元素的节点称为外部节点或叶子节点。
```
### （2）、堆栈
```bash
栈是一种遵从后进先出（LIFO）原则的有序集合。新添加或待删除的元素都保存在栈的同一端，称作栈顶，另一端就叫栈底。在栈里，新元素都靠近栈顶，旧元素都接近栈底。
undo/redo操作用的栈进行数据的存储。
栈结构如下所示：
class Stack{
  constructor(){
    // count属性记录栈的大小
    this.count = 0
    // items栈中存放的值,用对象而不用数组是因为对象操作的话时间复杂度是O(1),而数组是O(n)
    this.items = {}
  }
  size(){
    return this.count
  }
  isEmpty(){
    return this.count === 0
  }
  push(element){
    this.items[this.count] = element
    this.count++
  }
  pop(){
    if(this.isEmpty()){
      return undefined
    }
    this.count--
    const result = this.items[this.count]
    delete this.items[this.count]
    return result
  }
}
```

### （3）、队列
```bash
队列是遵循先进先出（FIFO，也称为先来先服务）原则的一组有序的项。
在dd-editor中，主要运用队列实现树的扁平化操作以及对树结构进行删除操作。代码如下：
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
```

## 2、算法
### （1）、递归
```bash
递归是一种解决问题的方法，它从解决问题的各个小部分开始，直到解决最初的大问题。递归通常涉及函数调用自身。
dd-editor中运用递归，当存在childen属性的时候递归去调用Node组件，代码如下：
    <Fragment>
      {dataTree.map(item => (
        <div
          key={item.id}
          className={classNames(
            isChild
              ? styles["tree-childNodes-row"]
              : styles["tree-root"],
            dataTree.length > 1 ? styles["multiply-node"] : ""
          )}
        >
          <span
            className={classNames(
              styles["tree-node"],
              styles[`${isLeaf(item)}`]
            )}
          >
            {editorEnable && <span
              style={{ color: "#F4374C" }}
              className={classNames(
                "iconfont",
                "icon-clear",
                styles["icon-operating"]
              )}
              onClick={() => onDelete(item)}
            ></span>}
            <NodeContainer title={item.name} />
            {editorEnable && <span
              style={{ color: "#24803D" }}
              className={classNames(
                "iconfont",
                "icon-add",
                styles["icon-operating"]
              )}
              onClick={() => onAdd(item)}
            ></span>}
          </span>
          {item.children && (
            <div
              ref={currentRef}
              className={classNames(
                styles["tree-childNodes"],
              )}
            >
              <Node
                dataTree={item.children}
                NodeContainer={NodeContainer}
                editorEnable={editorEnable}
                isChild
              />
            </div>
          )}
        </div>
      ))}
    </Fragment>
```
### （2）、广度优先