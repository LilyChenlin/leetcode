/*
 * @lc app=leetcode.cn id=11 lang=javascript
 *
 * [11] 盛最多水的容器
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
    let len = height.length;
    let res = -Infinity;
    let left = 0, right = len - 1;
    while (left < right) {
        let gap = right - left;
        let min = Math.min(height[left], height[right]);
        res = Math.max(res, min * gap);
        if (height[left] <= height[right]) {
            left++;
        } else if (height[left] > height[right]) {
            right--;
        }
    }
    return res;
};
// @lc code=end

