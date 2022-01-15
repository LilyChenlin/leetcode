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
    let map = new Map();
    let ans = 0;
    for (let start = 0, end = 0; end < s.length; end++) {
        if (map.has(s[end])) {
            start = Math.max(map.get(s[end]), start);
        }
        ans = Math.max(ans, end - start + 1);
        map.set(s[end], end + 1)
    }
    return ans;
};
// @lc code=end

