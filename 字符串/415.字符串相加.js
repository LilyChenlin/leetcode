/*
 * @lc app=leetcode.cn id=415 lang=javascript
 *
 * [415] 字符串相加
 */

// @lc code=start
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */

// "12" "181"
var addStrings = function(num1, num2) {
    let res = '';
    let flag = 0; // 判断是否进1
    // ----------------补零-------------------------
    let len1 = num1.length, len2 = num2.length;
    // 超出的长度
    let moreLen = 0;
    // 如果两个字符串长度不同
    if (len1 !== len2) {
        moreLen = Math.abs(len1 - len2);
        if (len1 > len2) {
            num2 = '0'.repeat(moreLen) + num2;
        } else {
            num1 = '0'.repeat(moreLen) + num1;
        }
    }
    // ---------------------------------------------
    for (let i = num1.length - 1; i >= 0; i--) {
        let sum = Number(num1[i]) + Number(num2[i]) + flag;
        const temp = sum % 10;
        res = res + temp
        flag = sum < 10 ? 0 : 1;
        
    }
    if (flag == 1) res = res + '1';
    return res.split("").reverse().join("");
}
// @lc code=end

