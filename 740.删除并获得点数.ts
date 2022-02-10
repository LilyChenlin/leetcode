/*
 * @lc app=leetcode.cn id=740 lang=typescript
 *
 * [740] 删除并获得点数
 */

// @lc code=start
function deleteAndEarn(nums: number[]): number {
    if (nums.length == 0) return 0;
    if (nums.length == 1) return nums[0];

    let maxVal = nums[0];
    for (let item of nums) {
        maxVal = Math.max(maxVal, item);
    }

    let newArr = new Array(maxVal + 1).fill(0);
    for (let item of nums) {
        newArr[item]++;
    }

    const len = newArr.length;
    let cur = 0, prev = 0;
    for (let i = 0; i < len; i++) {
        let temp = Math.max(prev + (newArr[i] * i), cur);
        prev = cur;
        cur = temp;
    }
    return cur;
};
// @lc code=end

