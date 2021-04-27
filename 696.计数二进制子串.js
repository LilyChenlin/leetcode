/*
 * @lc app=leetcode.cn id=696 lang=javascript
 *
 * [696] 计数二进制子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var countBinarySubstrings = function(s) {
    let count = [];
    let pre = 1; // 统计当前数字的个数
    let temp = s[0];
    for (let i = 1; i < s.length; i++) {
        if (s[i] == temp) {
            pre++;
            if (i == s.length - 1) {
                count.push(pre);
            }
        } else {
            temp = s[i];
            count.push(pre);
            pre = 1;
            if (i == s.length - 1) {
                count.push(pre);
            }
        }
    }
    let res = 0;
    for (let i = 1; i < count.length; i++) {
        res += Math.min(count[i - 1], count[i]);
    }
    return res;
};
// @lc code=end

