/*
 * @lc app=leetcode.cn id=4 lang=typescript
 *
 * [4] 寻找两个正序数组的中位数
 */

// @lc code=start
function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
    let m = nums1.length, n = nums2.length;
    let len = m + n;
    let aStart = 0, bStart = 0;
    let left = 0, right = 0;
    for (let i = 0; i <= Math.floor(len / 2); i++) {
        left = right;
        if (aStart < m && (nums1[aStart] < nums2[bStart]) || bStart >= n) {
            right = nums1[aStart];
            aStart++;
        } else {
            right = nums2[bStart];
            bStart++;
        }
    }

    if (len % 2 == 0) return (left + right) / 2.0;
    return right;
};
// @lc code=end

