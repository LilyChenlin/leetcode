/*
 * @lc app=leetcode.cn id=419 lang=javascript
 *
 * [419] 甲板上的战舰
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @return {number}
 */
// 战舰的左边和上边都是'.' 就是独立的战舰
var countBattleships = function(board) {
    let count = 0;
    for (let i = 0; i < board.length; i++) {
        const row = board[i];
        const preRow = board[i - 1] ? board[i - 1] : [];
        for (let j = 0; j < row.length; j++) {
            const charItem = row[j];
            if (charItem === 'X') {
                if (preRow[j] !== 'X' && row[j - 1] != 'X') {
                    count++;
                }
            }
        }
    }
    return count;
};
// @lc code=end

