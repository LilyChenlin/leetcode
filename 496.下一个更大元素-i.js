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
    for (let i = 0; i < nums1.length; i++) {
        let num = nums1[i];
        let idx = nums2.indexOf(num);
        let sortArr = nums2.slice(idx) || [];
        sortArr.sort((a, b) => a - b);
        if ( sortArr.length > 0 && sortArr[sortArr.length - 1] > num) {
            let j = idx;
            while (j < nums2.length) {
                if (nums2[j] > nums1[i]) {
                    nums1[i] = nums2[j];
                    break;
                } 
                j++
            }
        } else {
            nums1[i] = -1;
        }
    }
    return nums1
};
// @lc code=end

