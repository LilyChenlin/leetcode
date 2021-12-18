/*
 * @lc app=leetcode.cn id=282 lang=javascript
 *
 * [282] 给表达式添加运算符
 */

// @lc code=start
/**
 * @param {string} num
 * @param {number} target
 * @return {string[]}
 */
var addOperators = function (num, target) {
    let res = [], len = num.length;

    let backTrack = (index, prev, cur, solution) => {
        if (index == len) {
            if (cur === target) {
                res.push(solution); return;
            }
        } else {
            for (let i = index; i < len; i++) {
                if (i != index && num[index] === '0') break;
                let next = Number(num.substring(index, i + 1));
                if (index == 0) {
                    backTrack(i + 1, next, next, "" + next )
                } else {
                    backTrack(i + 1, next, next + cur, solution + "+" + next);
                    backTrack(i + 1, -next, cur - next, solution + "-" + next);
                    let x = prev * next;
                    backTrack(i + 1, x, cur - prev + x, solution + "*" + next);
                }
            }
        }

    };
    backTrack(0, 0, 0, '');
    return res;
};

// @lc code=end

