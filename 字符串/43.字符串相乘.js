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
var multiply = function (num1, num2) {
    if (num1 == '0' || num2 == '0') {
        return '0';
    }
    let len1 = num1.length, len2 = num2.length;
    let ansArr = new Array(len1 + len2).fill(0);
    for (let i = len1 - 1; i >= 0; i--) {
        let x = Number(num1[i]);
        for (let j = len2 - 1; j >= 0; j--) {
            let y = Number(num2[j]);
            ansArr[i + j + 1] += x * y;
        }
    }
    // console.log(ansArr)
    // 处理 进位
    for (let i = len1 + len2 - 1; i > 0; i--) {
        ansArr[i - 1] += Math.floor(ansArr[i] / 10);
        ansArr[i] = ansArr[i] % 10;
    }
    
    let i = ansArr[0] == '0' ? 1 : 0;
    let res = '';
    while (i < ansArr.length) {
        res += ansArr[i];
        i++
    }
    return res;
}
// @lc code=end

