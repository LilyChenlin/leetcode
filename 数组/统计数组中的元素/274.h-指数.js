/*
 * @lc app=leetcode.cn id=274 lang=javascript
 *
 * [274] H 指数
 */

// @lc code=start
/**
 * @param {number[]} citations
 * @return {number}
 */
// 0 1 3 5 6
// len = 5 
var hIndex = function(citations) {
    citations = citations.sort((a, b) => {return a - b});
    var i = 0;
    var len = citations.length;
    while (i < len && citations[len - 1 - i] > i) {
        // 倒序
        i++
    }
    return i;
};
// @lc code=end

