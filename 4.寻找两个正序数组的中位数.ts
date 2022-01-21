/*
 * @lc app=leetcode.cn id=4 lang=typescript
 *
 * [4] 寻找两个正序数组的中位数
 */

// @lc code=start
function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
        let concatArr = [];
        let left = 0, right = 0, len1 = nums1.length, len2 = nums2.length;
        while (left < len1 || right < len2) {
            if (left < len1 && right < len2) {
                if (nums1[left] <= nums2[right]) {
                    concatArr.push(nums1[left]);
                    left++;
                } else {
                    concatArr.push(nums2[right]);
                    right++;
                }
            } else if (left < len1) {
                concatArr.push(...nums1.slice(left));
                break;
            } else {
                concatArr.push(...nums2.slice(right))
                break;
            }
        }

        let count = concatArr.length;
        if (count % 2 === 0) {
            return (concatArr[Math.floor(count / 2) - 1] + concatArr[Math.floor(count / 2)]) / 2.0;
            
        } else {
            return concatArr[Math.floor(count / 2)]
        }



};
// @lc code=end

