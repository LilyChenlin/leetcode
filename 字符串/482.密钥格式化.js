/*
 * @lc app=leetcode.cn id=482 lang=javascript
 *
 * [482] 密钥格式化
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var licenseKeyFormatting = function(s, k) {
    s = s.toUpperCase().split('-').join('');
    var arr = [];
    while (s.length--) {
        if (s.length > k) {
        arr.unshift(s.slice(-k));
        s = s.slice(0, s.length - k);
        } else {
        arr.unshift(s);
        s = '';
        }
    }
    return arr.join('-');
};
// @lc code=end

