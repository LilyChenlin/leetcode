/*
 * @lc app=leetcode.cn id=16 lang=javascript
 *
 * [16] 最接近的三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    nums = nums.sort((a, c) => a - c);
    let ans = nums[0] + nums[1] + nums[2];
    for (let i = 0; i < nums.length; i++) {
        let start = i + 1, end = nums.length - 1;
        while(start < end) {
            let sum = nums[start] + nums[end] + nums[i];
            if (Math.abs(target - ans) > Math.abs(target - sum)) {
                ans = sum;
            }
            if (sum > target) {
                end--;
            } else if (sum < target) {
                start++;
            } else {
                return ans;
            }
        }
    }
    return ans
};
// @lc code=end

