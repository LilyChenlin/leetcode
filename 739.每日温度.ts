/*
 * @lc app=leetcode.cn id=739 lang=typescript
 *
 * [739] 每日温度
 */

// @lc code=start
function dailyTemperatures(temperatures: number[]): number[] {
    let stack = [], res = new Array(temperatures.length).fill(0);
    for (let i = 0; i < temperatures.length; i++) {
        while (stack.length !== 0 && temperatures[stack[stack.length - 1]] < temperatures[i]) {
            let top = stack[stack.length - 1];
            stack.pop();
            res[top] = i - top;
        }
        stack.push(i);
    }
    return res;
};
// @lc code=end

