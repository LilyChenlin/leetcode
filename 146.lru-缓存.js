/*
 * @lc app=leetcode.cn id=146 lang=javascript
 *
 * [146] LRU 缓存
 */

// @lc code=start
class ListNode {
    constructor(key, value) {
        this.key = key     
        this.value = value
        this.next = null
        this.prev = null
    }
}
/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
    this.capacity = capacity; 
    this.hash = {};
    this.count = 0;
    this.dummyHead = new ListNode();
    this.dummyTail = new ListNode();
    this.dummyHead.next = this.dummyTail;
    this.dummyTail.prev = this.dummyHead;
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
    let node = this.hash[key];
    if (node == null) return -1;
    this.moveToHead(node);
    return node.value;
};

/**
 * @description 移动节点到头部
 */
LRUCache.prototype.moveToHead = function (node) {
    this.removeFromList(node); // 将节点从链表中删除
    this.addToHead(node); // 将节点连接到链表头部
}

/**
 * @description 将节点从链表中删除
 */
LRUCache.prototype.removeFromList = function(node) {
    let temp1 = node.next;
    let temp2 = node.prev;
    temp2.next = temp1;
    temp1.prev = temp2;
}

/**
 * @description 将节点连接到链表头部
 */
LRUCache.prototype.addToHead = function(node) {
    node.prev = this.dummyHead;
    node.next = this.dummyHead.next;
    this.dummyHead.next.prev = node;
    this.dummyHead.next = node;
}
/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
    let node = this.hash[key];
    if (node == null) { // add
        if (this.count === this.capacity) {
            this.removeLastUse(node);
        }
        let newNode = new ListNode(key, value);
        this.hash[key] = newNode;
        this.addToHead(newNode);
        this.count++;
    } else {
        // 更新value
        node.value = value;
        this.moveToHead(node);
    }
};

LRUCache.prototype.removeLastUse = function(node) {
    let tail = this.popTail(); // 尾节点一定是最久未使用的
    delete this.hash[tail.key];
    this.count--;
}

LRUCache.prototype.popTail = function(node) {
    let tail = this.dummyTail.prev;
    this.removeFromList(tail);
    return tail;
}


/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
// @lc code=end

