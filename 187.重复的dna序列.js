/*
 * @lc app=leetcode.cn id=187 lang=javascript
 *
 * [187] 重复的DNA序列
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string[]}
 */
var findRepeatedDnaSequences = function(s) {
    const L = 10;
    let len = s.length;
    let seen = new Set(), outPut = new Set();
    for (let i = 0; i < len - L + 1; i++) {
        let str = s.substring(i, i + 10);
        if (seen.has(str)) outPut.add(str);
        seen.add(str);
    }
    return Array.from(outPut)
};
// @lc code=end

