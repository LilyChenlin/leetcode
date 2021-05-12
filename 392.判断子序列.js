/*
 * @lc app=leetcode.cn id=392 lang=javascript
 *
 * [392] 判断子序列
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    let sIndex = 0, tIndex = 0;
    while (tIndex < t.length && sIndex < s.length) {
        if (s[sIndex] == t[tIndex]) {
            sIndex++;
        }
        tIndex++;
    }

    return sIndex == s.length;
};
// @lc code=end

