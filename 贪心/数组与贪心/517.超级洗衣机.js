/*
 * @lc app=leetcode.cn id=517 lang=javascript
 *
 * [517] 超级洗衣机
 */

// @lc code=start
/**
 * @param {number[]} machines
 * @return {number}
 */
var findMinMoves = function(machines) {
    let sum = 0;
    sum = machines.reduce((sum, currentValue) => {return currentValue + sum});
    if ((sum % machines.length) !== 0) {
        return -1;
    }
    let n = sum / machines.length;
    let res = -Infinity, os = Array(n);
    for(let i = 0; i < machines.length; i++) {
        os[i] = machines[i] - n;
        res = Math.max(res, os[i])
    } 

    for (let i = 0; i < machines.length; i++) {
        res = Math.max(Math.abs(os[i]), res);
        os[i + 1] += os[i];
    }
    return res;
};
// @lc code=end

