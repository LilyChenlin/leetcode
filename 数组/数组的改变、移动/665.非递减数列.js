/*
 * @lc app=leetcode.cn id=665 lang=javascript
 *
 * [665] 非递减数列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var checkPossibility = function(nums) {
    var count = 0; 
    var n = nums.length;
    for (var i = 0; i < n - 1; i++) {
        var x = nums[i], y = nums[i + 1];
        if (x > y) {
            count ++;
            if (count > 1) {
                return false;
            }

            if ( i > 0 && y < nums[i - 1]) {
                nums[i + 1] = x
            }
        }
    }
    return true;
};
// @lc code=end

