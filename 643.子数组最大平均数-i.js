/*
 * @lc app=leetcode.cn id=643 lang=javascript
 *
 * [643] 子数组最大平均数 I
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function (nums, k) {
    // 求长度为k的平均数最大 -> 长度为k的总和数最大
    let max = -Infinity, count = 0;
    let total = 0;
    for (let i = 0; i <= nums.length - k; i++) {
        let left = i;
        while (count < k) {
            total += nums[left];
            count++;
            left++;
        }
        max = Math.max(max, total);
        count = 0;
        total = 0;
    }
    return (max / k);
};
// @lc code=end

