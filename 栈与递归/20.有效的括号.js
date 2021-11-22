/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const n = s.length;
    if (n % 2 === 1) {
        return false
    }
    let map = new Map([
        [")", "("],
        ["}", "{"],
        ["]", "["],
    ]);

    const stack = [];
    for (let i of s) {
        if (map.has(i)) {
            if (!stack.length || stack[stack.length - 1] !== map.get(i)) {
                return false;
            }
            stack.pop();
        } else {
            stack.push(i)
        }
    }
    return !stack.length;
}
// @lc code=end

