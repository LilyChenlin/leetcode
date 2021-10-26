/*
 * @lc app=leetcode.cn id=383 lang=javascript
 *
 * [383] 赎金信
 */

// @lc code=start
/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    let magazineMap = new Map();
    for (let i = 0; i < magazine.length; i++) {
        magazineMap.set(magazine[i], magazineMap.has(magazine[i]) ? magazineMap.get(magazine[i]) + 1 : 1);
    }
    for (let i = 0; i < ransomNote.length; i++) {
        if (magazineMap.has(ransomNote[i]) && magazineMap.get(ransomNote[i]) > 0) {
            magazineMap.set(ransomNote[i], magazineMap.get(ransomNote[i]) - 1);
        } else {
            return false;
        }
    }
    return true;
};
// @lc code=end

