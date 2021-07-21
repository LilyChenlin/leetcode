/*
 * @lc app=leetcode.cn id=622 lang=javascript
 *
 * [622] 设计循环队列
 */

// @lc code=start
/**
 * @param {number} k
 */
var MyCircularQueue = function(k) {
    this.capacity = k; // 容量
    this.headIndex = 0;
    this.queue = [];
    this.count = 0; // 当前数组长度
};

/** 
 * 插入元素
 * @param {number} value
 * @return {boolean}
 */
MyCircularQueue.prototype.enQueue = function(value) {
    if (this.isFull(value)) return false;
    this.queue[(this.headIndex + this.count) % this.capacity] = value;
    this.count++;
    return true;
};

/**
 * 删除元素
 * @return {boolean}
 */
MyCircularQueue.prototype.deQueue = function() {
    if (this.isEmpty()) return false;
    this.headIndex = (this.headIndex + 1) % this.capacity;
    this.count--;
    return true;
};

/**
 * 从队首获取元素
 * @return {number}
 */
MyCircularQueue.prototype.Front = function() {
    if (this.isEmpty()) return -1;
    return this.queue[this.headIndex];
};

/**
 * 获取队尾元素
 * @return {number}
 */
MyCircularQueue.prototype.Rear = function() {
    if (this.isEmpty()) return -1;
    let tailIndex = (this.headIndex + this.count  - 1) % this.capacity;
    return this.queue[tailIndex];
};

/**
 * 判断队列是否为空
 * @return {boolean}
 */
MyCircularQueue.prototype.isEmpty = function() {
    return this.count == 0;
};

/**
 * 检查队列是否已满
 * @return {boolean}
 */
MyCircularQueue.prototype.isFull = function() {
    return this.count === this.capacity
};

/**
 * Your MyCircularQueue object will be instantiated and called as such:
 * var obj = new MyCircularQueue(k)
 * var param_1 = obj.enQueue(value)
 * var param_2 = obj.deQueue()
 * var param_3 = obj.Front()
 * var param_4 = obj.Rear()
 * var param_5 = obj.isEmpty()
 * var param_6 = obj.isFull()
 */
// @lc code=end

