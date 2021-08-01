/*
 * @lc app=leetcode.cn id=3 lang=javascript
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    if (s.length == 0) return 0;
    let str = '';
    let maxLen = 0;
    for (let i = 0; i < s.length; i++) {
        if (str.indexOf(s[i]) == -1) {
            str += s[i]
        } else {
            maxLen = Math.max(maxLen, str.length)
            let lsIdx = str.indexOf(s[i]);
            str = str.substring(lsIdx + 1);
            str += s[i];
        }
    }
    return Math.max(str.length, maxLen);
};
// @lc code=end

