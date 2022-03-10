/*
 * @lc app=leetcode.cn id=20 lang=typescript
 *
 * [20] 有效的括号
 */

// @lc code=start
function isValid(s: string): boolean {
    let map = {
        '}': '{',
        ']': '[',
        ')': '(',
    };

    let stack = [];

    for (let i = 0; i < s.length; i++) {
        const target = s[i];
        const mapValue = map[target] || '';
        if (stack[stack.length - 1] === mapValue) {
            stack.pop();
        } else {
            stack.push(target);
        }
    }
    return stack.length === 0
};
// @lc code=end

