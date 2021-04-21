/*
 * @lc app=leetcode.cn id=387 lang=javascript
 *
 * [387] 字符串中的第一个唯一字符
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    let map = new Map();
    for (let i = 0; i < s.length; i++) {
        map.set(s[i], map.has(s[i]) ? map.get(s[i]) + 1 : 1);
    }
    for(let [key, value] of map.entries()) {
        if (value == 1) {
            return s.indexOf(key)
        }
    }
    return -1;
};
// @lc code=end

