/*
 * @lc app=leetcode.cn id=657 lang=javascript
 *
 * [657] 机器人能否返回原点
 */

// @lc code=start
/**
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function(moves) {
    let x = 0, y = 0;
    const len = moves.length;
    for (let i = 0; i < len; i++) {
        if (moves[i] == 'U') {
            y++;
        } else if (moves[i] == 'D') {
            y--;
        } else if (moves[i] == 'L') {
            x--;
        } else if (moves[i] == 'R') {
            x++;
        }
    }
    return x == 0 && y == 0;
};
// @lc code=end

