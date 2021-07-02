/*
 * @lc app=leetcode.cn id=633 lang=javascript
 *
 * [633] 平方数之和
 */

// @lc code=start
/**
 * @param {number} c
 * @return {boolean}
 */
var judgeSquareSum = function(c) {
    let left = 0, right = Math.floor(Math.sqrt(c));
    while (left <= right) {
        const sum = left * left+ right * right;
        if (sum > c) {
            right--
        } else if (sum < c) {
            left++;
        } else {
            return true;
        }
    }
    return false
};
// @lc code=end

