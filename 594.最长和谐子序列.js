/*
 * @lc app=leetcode.cn id=594 lang=javascript
 *
 * [594] 最长和谐子序列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
// 解法一 两次扫描
// var findLHS = function(nums) {
//     let map = new Map();
//     let len = 0;
//     for (let i = 0; i < nums.length; i++) {
//         map.set(nums[i], map.has(nums[i]) ? map.get(nums[i]) + 1 : 1);
//     }
//     for (let item of map.keys()) {
//         if (map.has(item + 1)) {
//             len = Math.max(len, map.get(item + 1) + map.get(item))
//         }
//     }
//     return len;
// };

// 解法二 一次扫描
var findLHS = function(nums) {
    let map = new Map();
    let len = 0;
    for (let i = 0; i < nums.length; i++) {
        map.set(nums[i], map.has(nums[i]) ? map.get(nums[i]) + 1 : 1);
        if (map.has(nums[i] + 1)) {
            len = Math.max(len, map.get(nums[i] + 1) + map.get(nums[i]))
        }
        if (map.has(nums[i] - 1)) {
            len = Math.max(len, map.get(nums[i] - 1 )  + map.get(nums[i]))
        }
    }
    return len;
}
// @lc code=end

