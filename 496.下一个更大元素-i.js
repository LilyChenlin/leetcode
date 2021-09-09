/*
 * @lc app=leetcode.cn id=496 lang=javascript
 *
 * [496] 下一个更大元素 I
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {
    // 找出nums2中的每一个元素的下一个更大的元素
    let len1 = nums1.length, len2 = nums2.length;
    let stack = [], map = new Map();
    for (let i = 0; i < len2; i++) {
        while (stack.length > 0 && stack[stack.length - 1] < nums2[i]) {
            map.set(stack.pop(),nums2[i])
        }
        stack.push(nums2[i])
    }

    for (let i = 0; i < len1; i++) {
        nums1[i] = map.get(nums1[i]) || -1;
    }
    return nums1;
};
// @lc code=end

