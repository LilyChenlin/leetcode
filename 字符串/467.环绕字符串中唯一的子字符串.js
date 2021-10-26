/*
 * @lc app=leetcode.cn id=467 lang=javascript
 *
 * [467] 环绕字符串中唯一的子字符串
 */

// @lc code=start
/**
 * @param {string} p
 * @return {number}
 */
var findSubstringInWraproundString = function(p) {
    let pre = 1, // 记录当前子串遍历长度
        res = 0; // 以每一个字母结尾的所有最长子串和
    let map = new Map();
    map.set(p[0], 1)
    for (let i = 1; i < p.length; i++) {
        if (p[i].charCodeAt() - p [i - 1].charCodeAt() === 1 ||
        p[i].charCodeAt() - p[i - 1].charCodeAt() === -25) {
            pre++
        } else {
            pre = 1;
        }

        map.set(p[i], Math.max(map.has(p[i]) ? map.get(p[i]) : 1, pre));
    }

    for (let value of map.values()) {
        res += value
    }
    return res
};
// @lc code=end

