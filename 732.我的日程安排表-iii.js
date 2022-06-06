/*
 * @lc app=leetcode.cn id=732 lang=typescript
 *
 * [732] 我的日程安排表 III
 */

// @lc code=start
var MyCalendarThree = function () {
    this.timeMap = {};
};

/** 
 * @param {number} start 
 * @param {number} end
 * @return {number}
 */
MyCalendarThree.prototype.book = function (start, end) {
    this.timeMap[start] = (this.timeMap[start] || 0) + 1;
    this.timeMap[end] = (this.timeMap[end] || 0) - 1;

    let max = 0, total = 0;
    for (let key in this.timeMap) {
        total += this.timeMap[key];
        max = Math.max(total, max)
    }
    return max;
};
/**
 * Your MyCalendarThree object will be instantiated and called as such:
 * var obj = new MyCalendarThree()
 * var param_1 = obj.book(start,end)
 */
// @lc code=end

