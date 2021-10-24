/*
 * @lc app=leetcode.cn id=287 lang=javascript
 *
 * [287] 寻找重复数
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function (nums) {
    let n = nums.length;
    for (let i = 0; i < n; i++) {
        let start = i + 1, cur = nums[i];
        while (start < n) {
            if (nums[start] == cur) return cur;
            else start++;
        }
    }
};
// @lc code=end

