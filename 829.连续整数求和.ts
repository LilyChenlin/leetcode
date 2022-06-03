/*
 * @lc app=leetcode.cn id=829 lang=typescript
 *
 * [829] 连续整数求和
 */

// @lc code=start
function consecutiveNumbersSum(n: number): number {
    let ans = 0;
    for (let i = 1; i * i < 2 * n; i++) {
        if (2 * n % i == 0 && (2 * n / i - i + 1) % 2 == 0) {
            ans++;
        }
    }
    return ans;
};
// @lc code=end

