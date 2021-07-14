/*
 * @lc app=leetcode.cn id=509 lang=javascript
 *
 * [509] 斐波那契数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
    let first = 0, second = 1;
    for (let i = 0; i < n; i++) {
        let temp = first + second;
        first = second;
        second = temp;
    }
    return first;
};
// @lc code=end

