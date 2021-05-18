/*
 * @lc app=leetcode.cn id=43 lang=javascript
 *
 * [43] 字符串相乘
 */

// @lc code=start
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function(num1, num2) {
    let res = 0;
    let j = 0; // 判断乘法位数
    for (let i = num2.length - 1; i >= 0; i--) {
        const number = Number(num2[i]);
        let temp = multiplyOne(num1, number);
        temp = temp + (j > 0 ? '0'.repeat(j) : '');
        res = res + Number(temp);
        j++;
    }
    return res.toString();
};
        // "012", "189"
var multiplyOne = function (num1, number) {
    // 判断是否进位
    let flag = 0; 
    let res = '';
    for (let i = num1.length - 1; i >= 0; i--) {
        let sum = Number(num1[i]) * number + flag;
        res = res + sum % 10;
        flag = Math.floor(sum / 10);
    }
    res += flag !== 0 ? flag : '';
    return res.split("").reverse().join("");
}
// @lc code=end

