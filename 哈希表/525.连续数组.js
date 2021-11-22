/*
 * @lc app=leetcode.cn id=525 lang=javascript
 *
 * [525] 连续数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxLength = function(nums) {
    let mp = new Map();
    let maxLen = 0;
    let count = 0;
    mp.set(0, -1);
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] == 1) {
            count++;
        } else {
            count--;
        }
        if (mp.has(count)) {
            const prevIndex = mp.get(count);
            maxLen = Math.max(maxLen, i - prevIndex)
        } else {
            mp.set(count, i)
        }
    }
    return maxLen;
};
// @lc code=end

