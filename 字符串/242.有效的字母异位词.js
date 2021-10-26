/*
 * @lc app=leetcode.cn id=242 lang=javascript
 *
 * [242] 有效的字母异位词
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    // 字母异位词 字母长度相同，字母相同，位置不同
    if (s.length !== t.length) {return false}
    let sMap = new Map();
    for (let i = 0; i < s.length; i++) {
        sMap.set(s[i], sMap.has(s[i]) ? sMap.get(s[i]) + 1 : 1);
    }
    for (let i = 0; i < t.length; i++) {
        sMap.set(t[i], sMap.has(t[i]) ? sMap.get(t[i]) - 1 : -1);
    }
    for (let value of sMap.values()) {
        if (value < 0) {
            return false
        }
    }
    return true;
};
// @lc code=end

