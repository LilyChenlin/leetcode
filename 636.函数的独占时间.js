/*
 * @lc app=leetcode.cn id=636 lang=javascript
 *
 * [636] 函数的独占时间
 */

// @lc code=start
/**
 * @param {number} n
 * @param {string[]} logs
 * @return {number[]}
 */
var exclusiveTime = function(n, logs) {
    let res = new Array(n).fill(0);
    let stack = [];
    let i = 1;
    let s = logs[0].split(":")
    stack.push(Number(s[0]))
    let prev = Number(s[2]);
    while (i < logs.length) {
        s = logs[i].split(":");
        if (s[1] === 'start') {
            if (stack.length > 0) {
                res[stack[stack.length - 1]] += Number(s[2]) - prev;
            }
            stack.push(Number(s[0]));
            prev = Number(s[2]);
        } else if (s[1] === 'end'){
            res[stack[stack.length - 1]] += Number(s[2]) - prev + 1;
            stack.pop();
            prev = Number(s[2]) + 1;
        }
        i++;
    }
    return res;
};
// @lc code=end

