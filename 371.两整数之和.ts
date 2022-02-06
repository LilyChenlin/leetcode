/*
 * @lc app=leetcode.cn id=371 lang=typescript
 *
 * [371] 两整数之和
 */

// @lc code=start
function getSum(a: number, b: number): number {
    while (b !== 0) {
        const temp = (a & b) << 1;
        a = a ^ b;
        b = temp;
    }
    return a;
};
// @lc code=end

