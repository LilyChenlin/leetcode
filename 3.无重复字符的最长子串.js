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
    let ans = -Infinity;
    let start = 0;
    while (start < s.length) {
        let temp = start, res = '';
        while (!res.includes(s[temp]) && temp < s.length) {
            res += s[temp];
            temp++;
        }
        ans = Math.max(ans, res.length);
        start++;
    }
    return ans === -Infinity ? 0 : ans;
};
// @lc code=end

