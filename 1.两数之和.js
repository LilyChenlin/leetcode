/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 *
 * https://leetcode-cn.com/problems/two-sum/description/
 *
 * algorithms
 * Easy (49.76%)
 * Likes:    9838
 * Dislikes: 0
 * Total Accepted:    1.6M
 * Total Submissions: 3.3M
 * Testcase Example:  '[2,7,11,15]\n9'
 *
 * 给定一个整数数组 nums 和一个目标值 target，请你在该数组中找出和为目标值的那 两个 整数，并返回他们的数组下标。
 * 
 * 你可以假设每种输入只会对应一个答案。但是，数组中同一个元素不能使用两遍。
 * 
 * 
 * 
 * 示例:
 * 
 * 给定 nums = [2, 7, 11, 15], target = 9
 * 
 * 因为 nums[0] + nums[1] = 2 + 7 = 9
 * 所以返回 [0, 1]
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let map = new Map();
    let len = nums.length;
    let diff = 0; 
    let res = [];
    for (let i = 0; i < len; i++) {
        diff = target - nums[i];
        let diffVal = map.get(diff);
        if (map.has(diff) && diffVal !== i) {
            res.push(i);
            res.push(diffVal);
            return res;
        }
        map.set(nums[i], i);
    }
     
};
// @lc code=end

