/*
 * @lc app=leetcode.cn id=658 lang=typescript
 *
 * [658] 找到 K 个最接近的元素
 */

// @lc code=start
function findClosestElements(arr: number[], k: number, x: number): number[] {
    let n = arr.length;
    let left = 0, right = n - 1;
    let removeSize = n - k;

    while (removeSize > 0) {
        if (x - arr[left] <= arr[right] - x) {
            right--;
        } else {
            left++;
        }
        removeSize--;
    }

    let res = [];
    for (let i = left; i < left + k; i++) {
        res.push(arr[i]);
    }
    return res;

};
// @lc code=end

