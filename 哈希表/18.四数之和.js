/*
 * @lc app=leetcode.cn id=18 lang=javascript
 *
 * [18] 四数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function (nums, target) {
    if (nums.length < 4) return [];
    let res = [];
    let len = nums.length;
    nums.sort((a, b) => a - b);
    for (let i = 0; i < len - 3; i++) {
        if (i > 0 && nums[i] == nums[i - 1]) continue;
        for (let j = i + 1; j < len - 2; j++) {
            if (j > i + 1 && nums[j] == nums[j - 1]) continue;
            let sum1 = nums[i] + nums[j];
            let left = j + 1, right = len - 1;
            while (left < right) {
                let sum = sum1 + nums[left] + nums[right];
                if (sum === target) {
                    res.push([nums[i], nums[j], nums[left], nums[right]]);
                    while (left < right && nums[left] === nums[left + 1]) left++;
                    while (left < right && nums[right] === nums[right - 1]) right--;
                    left++;
                    right--;
                } else if (sum < target) {
                    left++;
                } else if (sum > target) {
                    right--;
                }
            }
        }
    }
    return res;
};
// @lc code=end

