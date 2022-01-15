/*
 * @lc app=leetcode.cn id=22 lang=javascript
 *
 * [22] 括号生成
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
    let res = [];
    if (n == 0) {
        return res;
    }
    let backTrack = (leftLen, rightLen, solution) => {
        if (leftLen == n && rightLen == n) {
            res.push(solution);
            return;
        }
        if (leftLen < rightLen) return;
        if (leftLen < n) {
            backTrack(leftLen + 1, rightLen, solution + '(');
        }

        if (rightLen < n) {
            backTrack(leftLen, rightLen + 1, solution + ')');
        }
    }
    backTrack(0, 0, '');
    return res;
};
// @lc code=end

