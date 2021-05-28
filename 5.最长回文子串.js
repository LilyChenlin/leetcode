/*
 * @lc app=leetcode.cn id=5 lang=javascript
 *
 * [5] 最长回文子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    // 如何取字符串
    // 判断该字符串是否是回文字符串
    let res = '';
    let len = s.length;
    let max = 0
    for (let i = 0; i < len; i++) {
        for (let j = i + 1; j <= len; j++) {
            let tempStr = s.substring(i, j);
            if (isPalindrome(tempStr) && tempStr.length > max) {
                res = tempStr;
                max = tempStr.length;
            }
        }   
        
    }
    return res;
};

var isPalindrome = (str) => {
    let len = str.length;
    let midLen = Math.floor(len / 2);
    for(let i = 0; i < midLen; i++) {
        if (str[i] !== str[len - i - 1]) {
            return false;
        }
    }
    return true;
}
// @lc code=end

