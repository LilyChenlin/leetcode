/*
 * @lc app=leetcode.cn id=658 lang=javascript
 *
 * [658] 找到 K 个最接近的元素
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} x
 * @return {number[]}
 */
// 输入：arr = [1,2,3,4,5], k = 4, x = 3
// 输出：[1, 2, 3, 4]
// | a - x | < | b - x | 或者
//     | a - x | == | b - x | 且 a < b
var findClosestElements = function (arr, k, x) {
    let ans = [];
    arr.sort((a, b) => a - b);
    let len = arr.length, left = 0, right = len - 1;
    let removeSize = len - k;
    while (removeSize > 0) {
        if (Math.abs(arr[left] - x) <= Math.abs(arr[right] - x)) {
            right--;
        } else {
            left++;
        }
        removeSize--;
    }
    console.log(left, right)
    for (let i = left; i < left + k; i++) {
        ans.push(arr[i]);
    }
    return ans;
};
// @lc code=end

