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
var fourSum = function(nums, target) {
    if(nums.length < 4) return [];
    let res = [];
    nums.sort((a, b) =>  a - b);
    for (let i = 0; i < nums.length - 3; i++) {
        if (i > 0 && nums[i] == nums[i - 1]) continue;
        for (let j = i + 1; j < nums.length - 2; j++) {
            if (j > i + 1 && nums[j] == nums[j - 1]) continue;
            const partSum = nums[i] + nums[j];
            let left = j + 1, right = nums.length - 1;
            while (left < right) {
                const sum = partSum + nums[left] + nums[right];
                if (sum == target) {
                    res.push([nums[i], nums[j], nums[left], nums[right]]);
                    while (left < right && nums[left] == nums[++left]);
                    while (left < right && nums[right] == nums[--right]);
                } else if(sum < target) {
                    left++
                } else {
                    right--;
                }
            }
        }
    }
    return res;
};
// @lc code=end

