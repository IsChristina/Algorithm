// 请定义一个队列并实现函数 max_value 得到队列里的最大值，要求函数max_value、push_back 和 pop_front 的均摊时间复杂度都是O(1)。

// 若队列为空，pop_front 和 max_value 需要返回 -1

// 示例 1：

// 输入: 
// ["MaxQueue","push_back","push_back","max_value","pop_front","max_value"]
// [[],[1],[2],[],[],[]]
// 输出: [null,null,null,2,1,2]
// 示例 2：

// 输入: 
// ["MaxQueue","pop_front","max_value"]
// [[],[],[]]
// 输出: [null,-1,-1]

var MaxQueue = function(){
    this.queue = []
    this.deque = []
}
MaxQueue.prototype.max_value = function(){
    return this.deque.length ? this.deque[0] : -1
}
MaxQueue.prototype.push_back = function(){
    this.queue.push(value)
    while(this.deque.length && this.deque[this.deque.length - 1] < value){
        this.deque.pop()
    }
    this.deque.push(value)
}
MaxQueue.prototype.pop_front = function(){
    if(!this.queue.length) return -1
    let val = this.queue.shift()
    if(val === this.deque[0]){
        this.deque.shift()
    }
    return val
}