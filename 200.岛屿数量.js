/*
 * @lc app=leetcode.cn id=200 lang=javascript
 *
 * [200] 岛屿数量
 */

// @lc code=start
/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {

    let dfs = (grid, row, col) => {
        if (!isArea(row, col, grid)) return ;
        if (grid[row][col] != '1') return;

        grid[row][col] = '2';

        dfs(grid, row - 1, col);
        dfs(grid, row + 1, col);
        dfs(grid, row, col - 1);
        dfs(grid, row, col + 1);
    }
    
    let res = 0;
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if (grid[i][j] == '1') {
                dfs(grid, i, j)
                res++;
            }
        }
    }
    return res;

};

const isArea = (row, col, grid) => {
    return 0 <= row && row < grid.length && 0 <= col && col < grid[0].length;
}
// @lc code=end

