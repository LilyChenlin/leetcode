/*
 * @lc app=leetcode.cn id=463 lang=javascript
 *
 * [463] 岛屿的周长
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function(grid) {
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if (grid[i][j] === 1) {
                return dfs(grid, i, j)
            }
        }
    }
    return -1;
};


let dfs = (grid, row, col) => {
    if (!isArea(grid, row, col)) return 1;

    if (grid[row][col] == 0) return 1;

    if (grid[row][col] == 2) return 0;

    grid[row][col] = 2;
    return dfs(grid, row - 1, col) + dfs(grid, row + 1, col) + dfs(grid, row, col - 1) + dfs(grid, row, col + 1)
}

let isArea = (grid, row, col) => {
    return 0 <= row && row < grid.length && 0 <= col && col < grid[0].length;
}
// @lc code=end

