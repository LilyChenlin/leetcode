/*
 * @lc app=leetcode.cn id=334 lang=javascript
 *
 * [334] 递增的三元子序列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function(nums) {
    let len = nums.length;
    if (len < 3) {return false};
    let small = +Infinity, mid = +Infinity;
    for (let i = 0; i < len; i++) {
        if (nums[i] <= small) {
            small = nums[i];
        } else if (nums[i] <= mid) {
            mid = nums[i];
        } else if (nums[i] > mid){
            return true;
        }
    }
    return false;
};

// var ifTrue = (nums) => {
//     if (nums[0] < nums[1] && nums[1] <  nums[2]) {
//         return true
//     }
//     return false
// }
// @lc code=end

