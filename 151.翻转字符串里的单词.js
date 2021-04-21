/*
 * @lc app=leetcode.cn id=151 lang=javascript
 *
 * [151] 翻转字符串里的单词
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let sArr = s.split(" ");
    sArr = sArr.filter(item => item !== "");
    const len = sArr.length;
    let left = 0, right = len - 1;
    while (left < right) {
        const temp = sArr[left];
        sArr[left] = sArr[right];
        sArr[right] = temp;
        left++;
        right--;
    }
    return sArr.join(" ");
};
// @lc code=end

