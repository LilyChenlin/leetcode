/*
 * @lc app=leetcode.cn id=537 lang=javascript
 *
 * [537] 复数乘法
 */

// @lc code=start
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */

 //(a1 * b1 - a2 * b2) + (a1 * b2 + a2 * b1) i
var complexNumberMultiply = function(num1, num2) {
    let num1List = num1.includes("+")? num1.split("+") : num1.split("-");
    let num2List = num2.includes("+")? num2.split("+") : num2.split("-");


    let a1 = num1List[0], a2 = num1List[1].slice(0, num1List[1].length - 1);
    let b1 = num2List[0], b2 = num2List[1].slice(0, num2List[1].length - 1);

    let left = a1 * b1 - a2 * b2;
    let right = a1 * b2 + a2 * b1;

    return left + "+" + right +"i"
};
// @lc code=end

