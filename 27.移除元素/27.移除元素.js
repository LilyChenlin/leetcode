/*
 * @lc app=leetcode.cn id=27 lang=javascript
 *
 * [27] 移除元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
// 双指针解法
var removeElement = function (nums, val) {
    let left = 0, right = 0;
    while (left < nums.length && right < nums.length) {
        if (nums[right] !== val) {
            nums[left] = nums[right];
            left++;
        } 
        right++;

    }
    return  left;
};
// @lc code=end

