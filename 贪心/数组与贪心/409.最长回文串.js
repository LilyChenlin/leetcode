/*
 * @lc app=leetcode.cn id=409 lang=javascript
 *
 * [409] 最长回文串
 *
 * https://leetcode-cn.com/problems/longest-palindrome/description/
 *
 * algorithms
 * Easy (55.21%)
 * Likes:    250
 * Dislikes: 0
 * Total Accepted:    65.9K
 * Total Submissions: 119.2K
 * Testcase Example:  '"abccccdd"'
 *
 * 给定一个包含大写字母和小写字母的字符串，找到通过这些字母构造成的最长的回文串。
 * 
 * 在构造过程中，请注意区分大小写。比如 "Aa" 不能当做一个回文字符串。
 * 
 * 注意:
 * 假设字符串的长度不会超过 1010。
 * 
 * 示例 1: 
 * 
 * 
 * 输入:
 * "abccccdd"
 * 
 * 输出:
 * 7
 * 
 * 解释:
 * 我们可以构造的最长的回文串是"dccaccd", 它的长度是 7。
 * 
 * 
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
    let n = s.length;
    let map = new Map();
    let res = 0;
    for (let i = 0; i < n; i++) {
        map.set(s[i], (map.get(s[i]) + 1 || 1))
        if (map.get(s[i]) % 2 == 0) {
            res += 2;
            map.delete(s[i])
        }
    }
    return map.size > 0 ? res += 1 : res;

};
// @lc code=end

