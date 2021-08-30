/*
 * @lc app=leetcode.cn id=134 lang=javascript
 *
 * [134] 加油站
 */

// @lc code=start
/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function(gas, cost) {
    let n = gas.length;
    for (let i = 0; i < n; i++) {
        let j = i;
        let remain = gas[i];
        while (remain - cost[j] >= 0) {
            remain = remain - cost[j] + gas[(j + 1) % n];
            j = (j + 1) % n;
            if (j == i) {
                return i;
            }
        } 
        //最远距离绕到了之前，所以 i 后边的都不可能绕一圈了
        if (j < i) {
            return -1;
        }
        //i 直接跳到 j，外层 for 循环执行 i++，相当于从 j + 1 开始考虑
        i = j;
        
    }
    return -1;
};
// @lc code=end

