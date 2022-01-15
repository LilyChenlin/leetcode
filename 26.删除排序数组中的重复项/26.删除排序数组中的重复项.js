/*
 * @lc app=leetcode.cn id=26 lang=javascript
 *
 * [26] 删除排序数组中的重复项
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    var len = nums.length;
    var slow = 0, fast = 1;
    while(fast < len) {
        if (nums[slow] !== nums[fast]) {
            slow++;
            nums[slow] = nums[fast]
        }
        fast++;
    }
    return slow + 1;
};
// @lc code=end

