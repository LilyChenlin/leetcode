/*
 * @lc app=leetcode.cn id=42 lang=typescript
 *
 * [42] 接雨水
 */

// @lc code=start
function trap(height: number[]): number {
    let sum = 0, len = height.length;
    let max_left = new Array(len).fill(0);
    let max_right = new Array(len).fill(0);

    for (let i = 1; i < len - 1; i++) {
        max_left[i] = Math.max(max_left[i - 1], height[i - 1]);
    }

    for (let i = len - 2; i >= 0; i--) {
        max_right[i] = Math.max(max_right[i + 1], height[i + 1]);
    }

    for (let i = 1; i < len - 1; i++) {
        let min = Math.min(max_left[i], max_right[i]);
        if (min > height[i]) {
            sum = sum + (min - height[i])
        }
    }
    return sum;
};
// @lc code=end

