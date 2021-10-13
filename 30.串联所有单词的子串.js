/*
 * @lc app=leetcode.cn id=30 lang=javascript
 *
 * [30] 串联所有单词的子串
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
var findSubstring = function (s, words) {
    let left = 0, right = 0, len = s.length;
    let res = [];
    let k = words[0].length;
    while (right < len) {
        right = left + k;
        let temp = s.substring(left, right);
        let copyLeft = left, copyRight = right, valid = 0;
        let need = new Map();
        for (let i = 0; i < words.length; i++) {
            need.set(words[i], need.get(words[i]) + 1 || 1);
        }
        while (need.get(temp) > 0 && copyRight <= len) {
            valid++;
            need.set(temp, need.get(temp) - 1 || -1);
            if (valid === words.length) {
                res.push(left);
                valid = 0;
                break;
            }
            copyLeft = copyRight;
            copyRight = copyRight + k;
            temp = s.substring(copyLeft, copyRight);
        }
        left++;
    }
    return res;
};
// @lc code=end

