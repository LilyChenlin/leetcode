/*
 * @lc app=leetcode.cn id=697 lang=javascript
 *
 * [697] 数组的度
 *
 * https://leetcode-cn.com/problems/degree-of-an-array/description/
 *
 * algorithms
 * Easy (54.72%)
 * Likes:    194
 * Dislikes: 0
 * Total Accepted:    28K
 * Total Submissions: 50.9K
 * Testcase Example:  '[1,2,2,3,1]'
 *
 * 给定一个非空且只包含非负数的整数数组 nums, 数组的度的定义是指数组里任一元素出现频数的最大值。
 * 
 * 你的任务是找到与 nums 拥有相同大小的度的最短连续子数组，返回其长度。
 * 
 * 示例 1:
 * 
 * 
 * 输入: [1, 2, 2, 3, 1]
 * 输出: 2
 * 解释: 
 * 输入数组的度是2，因为元素1和2的出现频数最大，均为2.
 * 连续子数组里面拥有相同度的有如下所示:
 * [1, 2, 2, 3, 1], [1, 2, 2, 3], [2, 2, 3, 1], [1, 2, 2], [2, 2, 3], [2, 2]
 * 最短连续子数组[2, 2]的长度为2，所以返回2.
 * 
 * 
 * 示例 2:
 * 
 * 
 * 输入: [1,2,2,3,1,4,2]
 * 输出: 6
 * 
 * 
 * 注意:
 * 
 * 
 * nums.length 在1到50,000区间范围内。
 * nums[i] 是一个在0到49,999范围内的整数。
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
// [1,2,2,3,1,4,2]
var findShortestSubArray = function(nums) {
    let len = nums.length;
    const map = new Map();
    let maxArr = [];
    let max = 0;
    let res = nums.length;
    // 构造map对象 最高度值
    for (let i = 0; i < len; i++) {
        map.set(nums[i], map.has(nums[i]) ? map.get(nums[i]) + 1 : 1);
        const temp = map.get(nums[i]);
        max = temp > max ? temp : max;
    }
    // 查找满足最高度值的元素
    for (let [key, value] of map.entries()) {
        if (value == max) {
            maxArr.push(key)
        }
    }
    for (let i = 0; i < maxArr.length; i++) {
        const len = nums.lastIndexOf(maxArr[i]) - nums.indexOf(maxArr[i]) + 1;
        res = res < len ? res : len;
    }
    return res;
};
// @lc code=end

