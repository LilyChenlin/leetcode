/*
 * @lc app=leetcode.cn id=45 lang=typescript
 *
 * [45] 跳跃游戏 II
 */

// @lc code=start
function jump(nums: number[]): number {
    let end = 0, maxPos = 0, steps = 0;
    for (let i = 0; i < nums.length - 1; i++) {
        maxPos = Math.max(maxPos, nums[i] + i);
        if (i === end) {
            end = maxPos;
            steps++;
        }
    }
    return steps;
};
// @lc code=end

