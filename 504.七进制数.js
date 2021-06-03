/*
 * @lc app=leetcode.cn id=504 lang=javascript
 *
 * [504] 七进制数
 */

// @lc code=start
/**
 * @param {number} num
 * @return {string}
 */
var convertToBase7 = function(num) {
    // flag标记负数
    let flag = false;
    if (num < 0) flag = true;
    let str = '';
    num = Math.abs(num);
    while (num >= 7) {
        str = num % 7 + str;
        num = Math.floor(num / 7);
    }
    str = num + str;
    if (flag) str = '-' + str;
    return str;
};
// @lc code=end

