/*
 * @lc app=leetcode.cn id=32 lang=javascript
 *
 * [32] 最长有效括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function(s) {
    let stack = [];
    let maxLen = 0;
    stack.push(-1)
    for (let i = 0; i < s.length; i++) {
        if (s[i] == '(') {
            stack.push(i)
        } else {
            stack.pop();
            if(stack.length == 0) {
                stack.push(i)
            } else {
                maxLen = Math.max(maxLen, i - stack[stack.length - 1])
            }
        }
    }
    return maxLen;
};
// @lc code=end

