/*
 * @lc app=leetcode.cn id=69 lang=javascript
 *
 * [69] Sqrt(x)
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
    let left = 0, right = x;
    while (left <= right) {
        const mid = left + Math.round((right - left) / 2);
        const val = mid * mid;
        if (val <= x) {
            left = mid + 1
        } else {
            right = mid - 1;
        }
    }
    return right;
};
// @lc code=end

