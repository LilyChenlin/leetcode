/*
 * @lc app=leetcode.cn id=695 lang=javascript
 *
 * [695] 岛屿的最大面积
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function (grid) {
    let ans = 0;
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if (grid[i][j] === 1) {
                ans = Math.max(ans, dfs(grid, i, j));
            }
        }
    }
    return ans;
};

let dfs = (grid, row, col) => {
    if (!isArea(grid, row, col)) return 0;
    if (grid[row][col] !== 1) { return 0 };

    grid[row][col] = 2;

    return 1 + dfs(grid, row - 1, col) + dfs(grid, row + 1, col) + dfs(grid, row, col - 1) + dfs(grid, row, col + 1)
}

let isArea = (grid, row, col) => {
    return 0 <= row && row < grid.length && 0 <= col && col < grid[0].length;
}
// @lc code=end

