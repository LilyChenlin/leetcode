/*
 * @lc app=leetcode.cn id=9 lang=javascript
 *
 * [9] 回文数
 */

// @lc code=start
/**
 * @param {number} x
 * @return {boolean}
 */

 // 转为字符串判断回文
// var isPalindrome = function(x) {
//     x = x.toString();
//     let left = 0, right = x.length - 1;
//     while (left < right) {
//         if (x[left] !== x[right]) {
//             return false;
//         }
//         left++;
//         right--;
//     }
//     return true;
// };


var isPalindrome = function (x) {
    if (x < 0 || (x % 10 == 0 && x !== 0)) {
        return false;
    }

    let reverse = 0;
    while (x > reverse) {
        const digit = x % 10;
        x = Math.floor(x / 10);
        reverse = reverse * 10 + digit;
    }
    return  x == reverse || x == Math.floor(reverse / 10);
}

// @lc code=end

