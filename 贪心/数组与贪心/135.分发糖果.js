/*
 * @lc app=leetcode.cn id=135 lang=javascript
 *
 * [135] 分发糖果
 */

// @lc code=start
/**
 * @param {number[]} ratings
 * @return {number}
 */
var candy = function(ratings) {
    const len = ratings.length;
    let left = new Array(len).fill(0);
    for (let i = 0; i < len; i++) {
        if (i > 0 && ratings[i - 1] < ratings[i]) {
            left[i] = left[i - 1] + 1;
        } else {
            left[i] = 1;
        }
    }

    let right = 0, ret = 0;
    for (let i = len - 1; i > -1; i--) {
        if (i < len - 1 && ratings[i] > ratings[i + 1]) {
            right++
        } else {
            right = 1;
        }
        ret += Math.max(left[i], right);
    }
    return ret;
};
// @lc code=end

