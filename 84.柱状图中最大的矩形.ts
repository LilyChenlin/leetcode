/*
 * @lc app=leetcode.cn id=84 lang=typescript
 *
 * [84] 柱状图中最大的矩形
 */

// @lc code=start
function largestRectangleArea(heights: number[]): number {
    let len = heights.length;
    if (len == 0) {
        return 0;
    }
    if (len == 1) {
        return heights[0];
    }

    let res = 0, stack = [];
    let left = new Array(len), right = new Array(len);
    for (let i = 0; i < len; i++) {
        while (stack.length > 0 && heights[i] <= heights[stack[stack.length - 1]]) {
            stack.pop();
        }
        left[i] = stack.length === 0 ? -1 : stack[stack.length - 1];
        stack.push(i);
    }

    stack = [];

    for (let i = len - 1; i >= 0; i--) {
        while (stack.length !== 0 && heights[stack[stack.length - 1]] >= heights[i]) {
            stack.pop();
        }
        right[i] = stack.length === 0 ? len : stack[stack.length - 1];
        stack.push(i);
    }

    for (let i = 0; i < len; i++) {
        res = Math.max(res, (right[i] - left[i]  - 1) * heights[i])
    }

    return res;
};
// @lc code=end

