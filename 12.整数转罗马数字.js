/*
 * @lc app=leetcode.cn id=12 lang=javascript
 *
 * [12] 整数转罗马数字
 */

// @lc code=start
/**
 * @param {number} num
 * @return {string}
 */
// [1,5) [5, 10) [10, 50) [50, 100) [100, 500) [500, 1000];
var intToRoman = function(num) {
    let result = "";
    while (num > 0) {
        // if(num) {
            if( num <= 5 ){
                if (num == 5) {
                    result = result +  "V";
                    num = num - 5;
                }
                else if (num == 4) {
                    result = result + "IV"
                    num = num - 4;
                } else {
                    result = result + "I";
                    num--
                }
            }else if (num <= 10) {
                if (num == 10) {
                    result = result + "X";
                    num = num - 10;
                }
                else if (num == 9) {
                    result += "IX";
                    num = num - 9;
                } else {
                    result = result + "V";
                    num = num - 5;
                }
            } else if (num <= 50) {
                if (num == 50) {
                    result = result + "L";
                    num = num - 50;
                }
                else if (num >= 40) {
                    result += "XL"
                    num = num - 40;
                } else {
                    result = result + "X";
                    num = num - 10;
                }
            } else if (num <= 100) { 
                if (num == 100) {
                    result = result + "C";
                    num = num - 100;
                }
                else if (num >= 90) {
                    result = result + "XC";
                    num = num - 90;
                } else {
                    result = result + "L";
                    num = num - 50;
                }
            } else if (num <= 500) {
                if (num == 500) {
                    result = result + "D";
                    num = num - 500;
                }
                else if (num >= 400) {
                    result += "CD";
                    num = num - 400;
                } else {
                    result = result + "C";
                    num = num - 100;
                }
            } else if (num <= 1000){ 
                if (num == 1000) {
                    result = result + "M";
                    num = num - 1000;
                }
                else if (num >= 900) {
                    result += "CM";
                    num = num - 900;
                } else {
                    result = result + "D";
                    num = num - 500;
                }
            } else {
                result = result + "M";
                num = num - 1000
            }
        }
    return result;

};
// @lc code=end

