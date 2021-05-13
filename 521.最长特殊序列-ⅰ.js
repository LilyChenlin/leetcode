/*
 * @lc app=leetcode.cn id=521 lang=javascript
 *
 * [521] 最长特殊序列 Ⅰ
 */

// @lc code=start
/**
 * @param {string} a
 * @param {string} b
 * @return {number}
 */
var findLUSlength = function(a, b) {
    let aLen = a.length, bLen = b.length;
    if (aLen !== bLen) {
        return Math.max(aLen, bLen);
    } else {
        let aIndex = 0, bIndex = 0;
        while(aIndex < aLen && bIndex < bLen) {
            if (a[aIndex] !== b[bIndex]) {
                return aLen;
            } else {
                aIndex++;
                bIndex++;
                return -1;
            }
        }
        return res;
    }
};
// @lc code=end

