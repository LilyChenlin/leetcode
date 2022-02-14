/*
 * @lc app=leetcode.cn id=1014 lang=typescript
 *
 * [1014] 最佳观光组合
 */

// @lc code=start
function maxScoreSightseeingPair(values: number[]): number {
    let ans = 0, pre_max = values[0] + 0;
    for (let i = 1; i < values.length; i++) {
        ans = Math.max(ans, pre_max + values[i] - i);
        pre_max = Math.max(pre_max, values[i] + i);
    }
    return ans;
};
// @lc code=end

