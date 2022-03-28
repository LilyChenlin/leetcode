/*
 * @lc app=leetcode.cn id=72 lang=typescript
 *
 * [72] 编辑距离
 */

// @lc code=start
function minDistance(word1: string, word2: string): number {
    let len1 = word1.length + 1, len2 = word2.length + 1;
    let dp = new Array(len1).fill(0).map(item => new Array(len2).fill(0));

    dp[0][0] = 0;
    // 初始化
    for (let i = 1; i < len2; i++) {
        dp[0][i] = i;
    }
    for (let i = 1; i < len1; i++) {
        dp[i][0] = i;
    }

    for (let i = 1; i < len1; i++) {
        for (let j = 1; j < len2; j++) {
            let deleteItem = dp[i - 1][j] + 1;
            let addItem = dp[i][j - 1] + 1;
            let modifyItem = dp[i - 1][j - 1];
            if (word1[i - 1] !== word2[j - 1]) {
                modifyItem = modifyItem + 1;
            }
            dp[i][j] = Math.min(deleteItem, Math.min(addItem, modifyItem))
        }
    }
    return dp[len1 - 1][len2 - 1];
};
// @lc code=end

