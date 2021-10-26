/*
 * @lc app=leetcode.cn id=434 lang=javascript
 *
 * [434] 字符串中的单词数
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var countSegments = function(s) {
    if (s == "") return 0;
    let result = s.split(' ');
    result = result.filter((item) => item !== "");
    return result.length;
};
// @lc code=end

