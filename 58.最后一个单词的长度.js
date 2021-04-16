/*
 * @lc app=leetcode.cn id=58 lang=javascript
 *
 * [58] 最后一个单词的长度
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let sArr = s.split(" ");
    sArr = sArr.filter(item => item !== "");
    if (sArr.length == 0) {
        return 0;
    } 
    let targetS = sArr[sArr.length - 1];
    return targetS.length;
};
// @lc code=end

