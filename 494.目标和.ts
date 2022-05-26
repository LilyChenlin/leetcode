/*
 * @lc app=leetcode.cn id=494 lang=typescript
 *
 * [494] 目标和
 */

// @lc code=start
function findTargetSumWays(nums: number[], target: number): number {
    let ans = 0;

    let dfs = (i, res) => {
        if (i === nums.length) {
            if (res === target) {
                ans++;
            }
            return;
        } else {
            dfs(i + 1, res + nums[i])
            dfs(i + 1, res - nums[i])
        }
    }

    dfs(0, 0);
    return ans;
};
// @lc code=end

