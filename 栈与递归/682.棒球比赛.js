/*
 * @lc app=leetcode.cn id=682 lang=javascript
 *
 * [682] 棒球比赛
 */

// @lc code=start
/**
 * @param {string[]} ops
 * @return {number}
 */
var calPoints = function(ops) {
    let res = [];
    let num = 0;
    for (let i = 0; i < ops.length; i++) {
        switch(ops[i]) {
            case '+' : 
                num = Number(res[res.length - 1]) + Number(res[res.length - 2]);
                res.push(num)
                break;
            case 'D' :
                num =  Number(res[res.length - 1]) * 2;
                res.push(num)
                break;
            case 'C' :
                res.pop();
                break;
            default :     
                res.push(Number(ops[i]))
                break;
        }
    }

    let total = 0;
    for (let i = 0; i < res.length; i++) {
        total += res[i]
    }
    return total;
};
// @lc code=end

