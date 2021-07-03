/*
 * @lc app=leetcode.cn id=349 lang=javascript
 *
 * [349] 两个数组的交集
 *
 * https://leetcode-cn.com/problems/intersection-of-two-arrays/description/
 *
 * algorithms
 * Easy (71.06%)
 * Likes:    301
 * Dislikes: 0
 * Total Accepted:    146.2K
 * Total Submissions: 199.4K
 * Testcase Example:  '[1,2,2,1]\n[2,2]'
 *
 * 给定两个数组，编写一个函数来计算它们的交集。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 输入：nums1 = [1,2,2,1], nums2 = [2,2]
 * 输出：[2]
 * 
 * 
 * 示例 2：
 * 
 * 输入：nums1 = [4,9,5], nums2 = [9,4,9,8,4]
 * 输出：[9,4]
 * 
 * 
 * 
 * 说明：
 * 
 * 
 * 输出结果中的每个元素一定是唯一的。
 * 我们可以不考虑输出结果的顺序。
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    nums1 = nums1.sort((x, y) => x - y);
    nums2 = nums2.sort((x, y) => x - y);
    let idx1 = 0, idx2 = 0;
    let res = new Map();
    while (idx1 < nums1.length && idx2 < nums2.length) {
        if (nums1[idx1] == nums2[idx2]) {
            res.has(nums1[idx1]) ? null  : res.set(nums1[idx1], 1);
            idx1++;
            idx2++;
        } else if (nums1[idx1] < nums2[idx2]) {
            idx1++;
        } else {
            idx2++;
        }
    }
    let mapRes = [];
    for (let key of res.keys()) {
        mapRes.push(key)
    }
    return mapRes;


};
// @lc code=end

