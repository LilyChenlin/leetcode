/*
 * @lc app=leetcode.cn id=84 lang=javascript
 *
 * [84] 柱状图中最大的矩形
 */

// @lc code=start
/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function(heights) {
    let stack = [], res = -Infinity;
    for (let i = 0; i < heights.length; i++) {
        let len = stack.length;
        let maxTemp = -Infinity;
        while(stack.length > 0 && stack[stack.length - 1] < heights[i]) {
            maxTemp = stack.pop();
            res = Math.max(len * maxTemp, res)
        }
        stack.push(heights[i]);
    }
};
// @lc code=end

