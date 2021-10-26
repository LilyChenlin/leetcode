/*
 * @lc app=leetcode.cn id=28 lang=javascript
 *
 * [28] 实现 strStr()
 */

// @lc code=start
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    if (needle == "") return 0;
    if (haystack.length < needle.length) return -1;
    let resIndex = +Infinity;
    let i = 0, j = 0;
    while ( i < haystack.length && j < needle.length) {
        if (haystack[i] == needle[j]) {
            resIndex = Math.min(resIndex, i);
            j++;
            i++;
        } else {
            if (resIndex !== +Infinity) {
                i = resIndex + 1;
                // 重新遍历
                j = 0;
            } else {
                i++;
            }
            resIndex = +Infinity;
        }
        
    }
    return resIndex == Infinity || j < needle.length? -1 : resIndex;
};
// @lc code=end

