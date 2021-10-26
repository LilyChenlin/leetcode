/*
 * @lc app=leetcode.cn id=453 lang=javascript
 *
 * [453] 最小操作次数使数组元素相等
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var minMoves =  function(nums) {
    nums = nums.sort((a, b) =>  a - b);
    var count = 0;
    for (var i = nums.length - 1; i >= 0; i--) {
        count += (nums[i] - nums[0])
    }
    return count;
};
// @lc code=end

