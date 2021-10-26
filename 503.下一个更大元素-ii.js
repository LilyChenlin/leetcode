/*
 * @lc app=leetcode.cn id=503 lang=javascript
 *
 * [503] 下一个更大元素 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElements = function(nums) {
    let len = nums.length;
    let res = new Array(len).fill(-1);
    let stack = [];
    for (let i = 0; i < len * 2 - 1; i++) {
        while (stack.length > 0 && nums[stack[stack.length - 1]] < nums[i % len]) {
            if (res[stack.pop()] !== -1) continue;
            res[stack.pop()] = nums[i % len]
        }
        stack.push(i % len)
    }
    return res;
};
// @lc code=end

