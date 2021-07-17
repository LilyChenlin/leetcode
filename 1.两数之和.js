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
    let res = [0];
    let i = 1, tempI = 0;
    let rest = target - nums[0];
    while (i < nums.length || res.length < 2) {
        const temp = nums[i];
        rest = rest - temp;
        if (rest == 0) {
            res.push(i);
            return res;
        } else {
            rest = rest + temp;
        }
        if (i == nums.length - 1) {
            tempI++;
            i = tempI;
            rest = target - nums[i];
            res = [i];            
        }
        i++;

    }
};
// @lc code=end

