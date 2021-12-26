/*
 * @lc app=leetcode.cn id=529 lang=javascript
 *
 * [529] 扫雷游戏
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @param {number[]} click
 * @return {character[][]}
 */
var updateBoard = function(board, click) {
    const row = board.length, col = board[0].length;
    let x = click[0], y = click[1];
    if (board[x][y] === 'M') {
        board[x][y] = 'X';
    } else {
        dfs(board, x, y)
    }
    return board;
};

const dfs = (grid, row, col) => {
    const dx = [1, -1, 0, 0, 1, 1, -1, -1], dy = [0, 0, 1, -1, 1, -1, 1, -1];

    let ans = 0; // 统计周围雷总数
    // 分两种情况
    // 如果遍历到雷， 计算雷的总数，并将该位置置为雷数量
    // 如果没有雷

    for (let i = 0; i < 8; i++) {
        const x = row + dx[i], y = col + dy[i];
        if (!isArea(grid, x, y)) continue;
        if (grid[x][y] === 'M') {
            ans++;
        }
    }

    if (ans > 0) {
        grid[row][col] = ans + '';
    } else {
        // 递归空白格周围八格
        grid[row][col] = 'B';
        for (let i = 0; i < 8; i++) {
            const x = row + dx[i], y = col + dy[i];
            if (!isArea(grid, x, y) || grid[x][y] !== 'E') continue;
            dfs(grid, x, y)
        }
    }

}

const isArea = (grid, row, col) => {
    return 0 <= row && row < grid.length && 0 <= col && col < grid[0].length;
}
// @lc code=end

