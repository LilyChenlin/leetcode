/*
 * @lc app=leetcode.cn id=130 lang=javascript
 *
 * [130] 被围绕的区域
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function(board) {
    // 考虑从边界打入
    const row = board.length, col = board[0].length;
    for (let i = 0; i < row; i++) {
        for (let j = 0; j < col; j++) {
            // 当且仅当边界为0时进入dfs
            if (i == 0 || i == row - 1 || j == 0 || j == col - 1) {
                if (board[i][j] === 'O') {
                    dfs(board, i, j);
                }
            }
        }
    }

    for (let i = 0; i < row; i++) {
        for (let j = 0; j < col; j++) {
            if (board[i][j] === 'O') {
                board[i][j] = 'X';
            } else if (board[i][j] === '#') {
                board[i][j] = 'O';
            }
        }
    }
};

const dfs = (grid, row, col) => {
    if (row < 0 ||
        row >= grid.length ||
        col < 0 ||
        col >= grid[0].length ||
        grid[row][col] === '#' ||
        grid[row][col] === 'X'
    ) return

    grid[row][col] = '#';

    dfs(grid, row - 1, col)
    dfs(grid, row + 1, col)
    dfs(grid, row, col - 1)
    dfs(grid, row, col + 1)
}



// @lc code=end

