/*
 * @lc app=leetcode.cn id=67 lang=javascript
 *
 * [67] 二进制求和
 */

// @lc code=start
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    let res = '';
    let ans = 0;
    for(let i = a.length - 1, j = b.length - 1; i >= 0 || j >= 0; i--,j--) {
        let sum = ans;
        sum += i >= 0 ? Number(a[i]) : 0;
        sum += j >= 0 ? Number(b[j]) : 0;
        res = res + sum % 2;
        ans = Math.floor(sum / 2)
        
    }
    if (ans == 1) res = res + '1';
    return res.split("").reverse().join("")
};
// @lc code=end

