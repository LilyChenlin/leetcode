/*
 * @lc app=leetcode.cn id=380 lang=javascript
 *
 * [380] 常数时间插入、删除和获取随机元素
 */

// @lc code=start
/**
 * Initialize your data structure here.
 */
var RandomizedSet = function() {
    this.valToIndexMap = new Map(); // 记录nums中的数字对应的Index 并记录在map中
    this.set = [];
};

/**
 * Inserts a value to the set. Returns true if the set did not already contain the specified element. 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function(val) {
    // 如果set中已经存在了这个值，则不需要插入
    if (this.valToIndexMap.has(val)) return false;

    this.valToIndexMap.set(val, this.set.length);
    this.set.push(val);
    return true;
};

/**
 * Removes a value from the set. Returns true if the set contained the specified element. 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function(val) {
    if (!this.valToIndexMap.has(val)) return false;

    // 找到删除元素在this.set中的Index
    var index = this.valToIndexMap.get(val);
    
    // 获得this.set最后一个元素
    var lastItem = this.set[this.set.length - 1];
     // 将valToIndexMap中的最后一个数的索引修改为Index
    this.valToIndexMap.set(lastItem, index);

    // 在this.set中交换要删除的值和最后一个值
    this.set[index] = lastItem;

    // 直接pop数组最后一位数
    this.set.pop();
    this.valToIndexMap.delete(val)
    return true
    
};

/**
 * Get a random element from the set.
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function() {
    let randomIndex = Math.floor(Math.random() * this.set.length);
    return this.set[randomIndex]
};

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */
// @lc code=end

