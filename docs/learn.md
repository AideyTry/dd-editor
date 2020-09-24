<!--
 * @Author: Aiden
 * @Date: 2020-09-14 09:49:46
 * @LastEditTime: 2020-09-24 16:01:03
 * @LastEditors: Aiden
 * @Descripti
-->
## 1、数据结构
```bash
dd-editor中除用到的数组、对象数据结构外还用到了堆栈
```
### （1）、堆栈
```bash
栈是一种遵从后进先出（LIFO）原则的有序集合。新添加或待删除的元素都保存在栈的同一端，称作栈顶，另一端就叫栈底。在栈里，新元素都靠近栈顶，旧元素都接近栈底。
undo/redo操作用的栈进行数据的存储。
栈结构如下所示：
class Stack{
  constructor(){
    // count属性记录栈的大小
    this.count = 0
    // items栈中存放的值
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