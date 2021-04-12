/*
 * @lc app=leetcode.cn id=520 lang=javascript
 *
 * [520] 检测大写字母
 */

// @lc code=start
/**
 * @param {string} word
 * @return {boolean}
 */

// 解法一
// var detectCapitalUse = function(word) {
//     // 通过判断大写字母的个数
//     // 1. 个数 == 单词长度
//     // 2. 个数 == 1
//     let num = 0;
//     const len = word.length;
//     for (let i = 0; i < len; i++) {
//         if(/[A-Z]/.test(word[i])) {
//             num++;
//         }
//     }

//     if (num == word.length || num == 1 && (/[A-Z]/.test(word[0])) || num == 0) {
//         return true;
//     } 
//     return false
// };


// 解法二 正则表达式
var detectCapitalUse = function(word) {
    const reg = /^[A-Z]*$|^[A-Z][a-z]*$|^[a-z]*$/;
    return reg.test(word)
}
// @lc code=end

