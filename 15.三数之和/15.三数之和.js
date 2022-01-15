/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    let res = [];
    if (nums.length < 3 || !nums) return res;
    let len = nums.length;
    nums.sort((a, b) => a - b)
    for (let i = 0; i < len; i++) {
        if (nums[i] > 0) return res;
        if (nums[i] == nums[i - 1] && i > 0) continue;
        let left = i + 1, right = len - 1;
        while (left < right) {
            let sum = nums[i] + nums[left] + nums[right];
            if (sum == 0) {
                res.push([nums[i], nums[left], nums[right]]);
                while (left < right && nums[left] == nums[left + 1]) left++;
                while (left < right && nums[right] == nums[right + 1]) right--;
                left++;
                right--;
            } else if (sum < 0) {
                left++;
            } else {
                right--;
            }
        }
    }
    return res;
};
// @lc code=end

