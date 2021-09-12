/*
 * @lc app=leetcode.cn id=456 lang=javascript
 *
 * [456] 132 模式
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var find132pattern = function(nums) {
    let stack = [];
    let k = -Infinity;
    for (let i = nums.length - 1; i >= 0; i--) {
        if (nums[i] < k) return true;
        while (stack.length > 0 && stack[stack.length - 1] < nums[i]) {
            k = stack[stack.length - 1];
            stack.pop();
        }
        stack.push(nums[i])
    }
    return false
};
// @lc code=end

