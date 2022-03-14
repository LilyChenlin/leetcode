/*
 * @lc app=leetcode.cn id=32 lang=typescript
 *
 * [32] 最长有效括号
 */

// @lc code=start
function longestValidParentheses(s: string): number {
    let stack = [-1], ans = 0;
    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(') {
            stack.push(i)
        } else {
            stack.pop();
            if (stack.length == 0) {
                stack.push(i)
            } else {
                ans = Math.max(ans, i - stack[stack.length - 1])
            } 
        }
    }
    return ans;
};
// @lc code=end

