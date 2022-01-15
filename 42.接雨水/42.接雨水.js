/*
 * @lc app=leetcode.cn id=42 lang=javascript
 *
 * [42] 接雨水
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    let left = 0, right = height.length - 1;
    let ans = 0;
    let left_max = 0, right_max = 0;
    while (left < right) {
        left_max = Math.max(height[left], left_max);
        right_max = Math.max(height[right], right_max);
        if (height[left] < height[right]) {
            ans += left_max - height[left];
            left++
        } else {
            ans += right_max - height[right];
            right--;
        }
    }
    return ans;
};
// @lc code=end

