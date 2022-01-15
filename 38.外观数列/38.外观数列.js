/*
 * @lc app=leetcode.cn id=38 lang=javascript
 *
 * [38] 外观数列
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
    let first = "1";
    if (n == 1) return first;
    for (let i = 2; i <= n; i++) {
        first = change(i, first)
    }
    return first;
};
// val = 2, first = "1";
var change = function (val, first) {
    let count = 1, value = '';
    let temp = first[0]; // 记录当前数字
    for (let i = 1; i < first.length; i++) {
        if (first[i] !== temp) {
            value += count + temp
            temp = first[i];
            count = 0;
        }
        count++;
    }
    value += count + temp
    return value;
}
// @lc code=end

