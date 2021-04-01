/*
 * @lc app=leetcode.cn id=189 lang=javascript
 *
 * [189] 旋转数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// 解法一：不是原地算法解决
// var rotate = function(nums, k) {
//     // 解法1
//     var start = 0;
//     while(start < k) {
//         var temp = nums.pop();
//         nums.unshift(temp);
//         start++;
//     }
//     return nums;
// };

// 解法二：数组翻转 原地
// var reverse = (nums, start, end) => {
//     while (start < end) {
//         var temp = nums[start];
//         nums[start] = nums[end];
//         nums[end] = temp;
//         start++;
//         end--;
//     }
// }
// var rotate = function(nums, k) {
//     k = k % nums.length;
//     reverse(nums, 0, nums.length - 1);
//     reverse(nums, 0, k - 1);
//     reverse(nums, k, nums.length - 1)
// };

// @lc code=end

