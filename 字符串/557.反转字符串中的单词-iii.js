/*
 * @lc app=leetcode.cn id=557 lang=javascript
 *
 * [557] 反转字符串中的单词 III
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var reverseOneWord = function(s) {
    let sArr = s.split("");
    let left = 0, right = sArr.length - 1;
    while (left < right) {
        const temp = sArr[left];
        sArr[left] = sArr[right];
        sArr[right] = temp;
        left++;
        right--;
    }
    return sArr.join("");
}
var reverseWords = function(s) {
    let sArr = s.split(" ");
    let result = [];
    for (let i = 0; i < sArr.length; i++) {
        let temp = sArr[i];
        let word = reverseOneWord(temp);
        result.push(word);
    }
    return result.join(" ")
};
// @lc code=end

