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
    let res = s[0];
    let len = 1;
    for (let i = 0; i < s.length - 1; i++) {
        let end = s.length;
        while (end > 0) {
            let tempStr = s.substring(i, end);
            if (isPalindrome(tempStr)) {
                const strLen = tempStr.length;
                if (strLen > len) {
                    len = strLen;
                    res = tempStr;
                }
            }
            end--;
        }
        
    }
    return res;
};

var isPalindrome = (str) => {
    let left = 0, right = str.length - 1;
    while (left < right) {
        if (str[left] !== str[right]) {
            return false
        }
        left++;
        right--;
    }
    return true
}
// @lc code=end

