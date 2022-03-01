/*
 * @lc app=leetcode.cn id=416 lang=typescript
 *
 * [416] 分割等和子集
 */

// @lc code=start
function canPartition(nums: number[]): boolean {
    let total = nums.reduce((total, cur) =>{return total + cur}, 0);
    if (total % 2 !== 0) return false;
    let target = total / 2;

    let n = nums.length;
    // 初始化
    let dp = new Array(n).fill(0).map(item => new Array(target + 1).fill(0));
    // 针对第一件物品
    for (let i = 0; i <= target; i++) {
        dp[0][i] = i >= nums[0] ? nums[0] : 0;
    }
    
    for(let i = 1; i < n; i++) {
        for (let j = 0; j <= target; j++) {
            // 不选择第i件物品
            let noOne = dp[i - 1][j]; 
            // 选择第i件物品
            let yesOne = j >= nums[i] ? dp[i - 1][j - nums[i]] + nums[i] : 0; // 选择这个物品
            dp[i][j] = Math.max(noOne, yesOne)
        }
    }

    return dp[n - 1][target] === target
};
// @lc code=end

