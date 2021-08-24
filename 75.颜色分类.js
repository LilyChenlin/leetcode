/*
 * @lc app=leetcode.cn id=75 lang=javascript
 *
 * [75] 颜色分类
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// 单指针
// var sortColors = function(nums) {
//     // 原地排序：不使用额外的空间来进行排序
//     let spr = 0;
//     for (let i = 0; i < nums.length; i++) {
//         if (nums[i] == 0) {
//             nums[i] = nums[spr];
//             nums[spr] = 0;
//             spr++;
//         }
//     }
//     for (let i = spr; i < nums.length; i++) {
//         if(nums[i] == 1) {
//             nums[i] = nums[spr];
//             nums[spr] = 1;
//             spr++;
//         }
//     }
//     return nums;
// };

// 双指针
var sortColors = function(nums) {
    let n = nums.length;
    let p0 = 0, p1 = 0;
    for (let i = 0; i < n; i++) {
        if (nums[i] == 0) {
            nums[i] = nums[p0];
            nums[p0] = 0;
            if (p0 < p1) {
                temp = nums[i];
                nums[i] = nums[p1];
                nums[p1] = temp;
            }
            p0++;
            p1++;
        } else if (nums[i] == 1) {
            nums[i] = nums[p1];
            nums[p1] = 1;
            p1++;
        }
    }
}
// @lc code=end

