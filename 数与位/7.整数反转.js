/*
 * @lc app=leetcode.cn id=7 lang=javascript
 *
 * [7] 整数反转
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */

// 不聪明的解法
// var reverse = function(x) {
//     x = x.toString()
//     let xArr = x.split("");
//     let flag = false;
//     if (xArr[0] == '-') {
//         xArr = xArr.slice(1);
//         flag = true;
//     }
//     let resArr = xArr.reverse();
//     while(resArr[0] == '0') {
//         resArr.shift();
//     }
//     if (flag) {
//         resArr.unshift('-');
//     }

//     let res = Number(resArr.join(""));
//     if (res < Math.pow(-2, 31) || res > Math.pow(2, 31) - 1) {
//         return 0;
//     }
//     return res;
// };


// 聪明的解法
var reverse = function (s) {
    let res = 0;
    while (s !== 0) {
        const digit = s % 10;
        s = ~~(s / 10);
        res = res * 10 +digit;
        if (res < Math.pow(-2, 31) || res > Math.pow(2, 31) - 1) {
            return 0;
        }
    }
    return res;
}

// @lc code=end

