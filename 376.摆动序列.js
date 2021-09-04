/*
 * @lc app=leetcode.cn id=376 lang=javascript
 *
 * [376] 摆动序列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var wiggleMaxLength = function(nums) {
    let down = 1, up = 1;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > nums[i - 1]) {
            up = down + 1;
        } else if (nums[i] < nums[i - 1]){
            down = up + 1;
        }
    }
    return nums.length == 0 ? 0 : Math.max(down, up)
}
// @lc code=end

