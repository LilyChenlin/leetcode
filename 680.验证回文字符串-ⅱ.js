/*
 * @lc app=leetcode.cn id=680 lang=javascript
 *
 * [680] 验证回文字符串 Ⅱ
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */

// 双指针错误方式
// var validPalindrome = function(s) {
//     let left = 0, right = s.length - 1;
//     let count = 0;
//     while (left < right) {
//         if (s[left] !== s[right]) {
//             if (count >= 1) {
//                 return false;
//             }
//             if (right == left + 1) {
//                 return true;
//             } else if (s[left + 1] == s[right]) {
//                 left++;
//                 count++;
//             } else if (s[left] == s[right - 1]) {
//                 right--;
//                 count++
//             } else {
//                 return false;
//             }
//         }  else {
//             left++;
//             right--;
//         }
//     }
//     return true;
// };

var validPalindrome = function(s) {
    let left = 0, right = s.length - 1;
    while(left < right) {
        if (s[left] == s[right]) {
            left++;
            right--;
        } else {
            return isvalidPalindrome(s, left, right - 1) || isvalidPalindrome(s, left + 1, right);
        }
    }
    return true;
}

var isvalidPalindrome = (s, left, right) => {
    while (left < right) {
        if (s[left] !== s[right]) {
            return false;
        }
        left++;
        right--;
    }
    return true;
}
// @lc code=end

