/*
 * @lc app=leetcode.cn id=128 lang=javascript
 *
 * [128] 最长连续序列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    let ans = 0, map = new Map();
    for (let i = 0; i < nums.length; i++) {
        map.set(nums[i], map.get(nums[i]) + 1 || 1);
    }
    for (let i = 0; i < nums.length; i++) {
        let count = 1, num = nums[i];
        if (!map.has(num - 1)) {
            while (map.has(num + 1 )) {
                num = num + 1;
                count++;
            }
        }
        ans = Math.max(ans, count);
    }
    return ans;
};
// @lc code=end

