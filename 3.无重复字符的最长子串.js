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
    var left = 0, right = 0;
    var res = 0;
    var window = new Map();
    while (right < s.length) {
        var c =  s[right];
        right++;
        window.set(c, window.has(c) ? window.get(c) + 1 : 1);
        // 缩小左窗口
        while (window.get(c) > 1) {
            var d = s[left];
            left++;
            window.set(d, window.has(d) ? window.get(d) - 1 : -1)
        }
        res = Math.max(right - left, res)
    }
    return res;
};
// @lc code=end

