/*
 * @lc app=leetcode.cn id=209 lang=javascript
 *
 * [209] 长度最小的子数组
 */

// @lc code=start
/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
    let minLen = +Infinity;
    let len = nums.length;
    for (let i = 0; i < len; i++) {
        let start = i, arr = [], temp = target;
        while (start < len) {
            temp = temp - nums[start];
            arr.push(nums[start]);
            start++;
        }
        if (temp <= 0) {
            const arrLen = arr.length;
            minLen = Math.min(minLen, arrLen);
        }
    }
    return minLen == +Infinity ? 0 : minLen;
};
// @lc code=end

