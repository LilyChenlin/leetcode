/*
 * @lc app=leetcode.cn id=42 lang=typescript
 *
 * [42] 接雨水
 */

// @lc code=start
var trap = function(height) {
    let ans = 0, len = height.length;
    let max_left_arr = new Array(len).fill(0), max_right_arr = new Array(len).fill(0);
    for (let i = 1; i < height.length - 1; i++) {
        max_left_arr[i] = Math.max(max_left_arr[i - 1], height[i - 1])
    }

    for (let j = height.length - 2; j >= 0; j--) {
        max_right_arr[j] = Math.max(max_right_arr[j + 1], height[j + 1]);
    }

    for (let i = 1; i < height.length - 1; i++) {
        let minVal = Math.min(max_left_arr[i], max_right_arr[i]);
        if (minVal > height[i]) {
            ans += minVal - height[i]
        }
    }
    return ans;
};
// @lc code=end

