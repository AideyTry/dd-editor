<!--
 * @Author: Aiden
 * @Date: 2020-09-14 09:49:46
 * @LastEditTime: 2021-08-15 15:50:39
 * @LastEditors: Aiden
 * @Descripti
-->
English | [简体中文](learn.md)

## 1、Data Structure
- In addition to the arrays and object data structures used in dd-editor, trees, stacks, and queues are also used.

###  (1).Tree
- A tree structure contains a series of nodes with a parent-child relationship. Each node has a parent node (except the first node at the top) and zero or more child nodes. The node at the top of the tree is called the root node, and the node without child elements is called an external node or a leaf node.
### (2).Stack
- A stack is an ordered collection that follows the last in first out (LIFO) principle. Newly added or to-be-deleted elements are stored on the same end of the stack, called the top of the stack, and the other end is called the bottom of the stack. In the stack, new elements are close to the top of the stack, and old elements are close to the bottom of the stack.
The stack used for undo/redo operations stores data.
The stack structure is as follows:
```bash
class Stack{
  constructor(){
    // The count attribute records the size of the stack.
    this.count = 0
    // The value stored in the items stack uses objects instead of arrays because the time complexity of object operations is O(1), and the array is O(n)
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

### (3).Queue
- A queue is an ordered set of items following the first-in-first-out (FIFO, also known as first-come, first-served) principle.
In dd-editor, the queue is mainly used to realize the flattening operation of the tree and delete the tree structure. code goes like below:
```bash
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

## 2、Algorithms
### （1）、Recursion
- Recursion is a method of solving problems. It starts from solving the small parts of the problem until the initial big problem is solved. Recursion usually involves a function calling itself.
Recursion is used in dd-editor. When there is a childen attribute, the Node component is called recursively. The code is as follows:
```bash
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
### (2). BFS
- Through the breadth-first search algorithm, delete element nodes
```
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
```