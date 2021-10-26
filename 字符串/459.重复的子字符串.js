/*
 * @lc app=leetcode.cn id=459 lang=javascript
 *
 * [459] 重复的子字符串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function(s) {
    let subStr = '';
    for (let i = 1; i < s.length; i++) {
        // 获取子串
        subStr = s.slice(0, i);
        let temp = subStr;
        while (subStr.length < s.length) {
            subStr += temp;
        }
        if (subStr == s) {
            return true;
        }
    }
    return false;    
};

// @lc code=end

