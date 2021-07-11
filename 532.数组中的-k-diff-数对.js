/*
 * @lc app=leetcode.cn id=532 lang=javascript
 *
 * [532] 数组中的 k-diff 数对
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findPairs = function(nums, k) {
    nums = nums.sort((a, b) => {return a - b});
    let left = 0, right = 1;
    let count = 0;
    while(left < nums.length && right < nums.length) {
        if(nums[right] - nums[left] == k) {
            count++;
        }
        right++;
        if (right == nums.length - 1) {
            left++;
            right = left + 1;
        }
    }
    return count;
};
// @lc code=end

