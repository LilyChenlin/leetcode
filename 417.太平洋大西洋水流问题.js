/*
 * @lc app=leetcode.cn id=417 lang=javascript
 *
 * [417] 太平洋大西洋水流问题
 */

// @lc code=start
/**
 * @param {number[][]} heights
 * @return {number[][]}
 */
var pacificAtlantic = function(heights) {
    let res = [], row = heights.length, col = heights[0].length;
    // 太平洋
    let TAI = new Array(row).fill(false).map(() => new Array(col).fill(false));
    // 大西洋
    let DA = new Array(row).fill(false).map(() => new Array(col).fill(false));


    // 太平洋 上左
    // 大西洋 下右
    for (let i = 0; i < row; i++) {
        dfs(heights, TAI, i, 0)
        dfs(heights, DA, i, col - 1)
    }

    for (let i = 0; i < col; i++) {
        dfs(heights, TAI, 0, i)
        dfs(heights, DA, row - 1, i)
    }


    for (let i = 0; i < row; i++) {
        for (let j = 0; j < col; j++) {
            if (TAI[i][j] && DA[i][j]) {
                res.push([i, j])
            }
        }
    }
    return res;

};

const dfs = (grid, canReach, row, col) => {
    if (canReach[row][col]) { return }
    canReach[row][col] = true;
    if (row - 1 >= 0 && grid[row - 1][col] >= grid[row][col]) dfs(grid, canReach, row - 1, col);
    if (row + 1 < grid.length && grid[row + 1][col] >= grid[row][col]) dfs(grid, canReach, row + 1, col);
    if (col - 1 >= 0 && grid[row][col - 1] >= grid[row][col]) dfs(grid, canReach, row, col - 1);
    if (col + 1 < grid[0].length && grid[row][col + 1] >= grid[row][col]) dfs(grid, canReach, row, col + 1);
}


// @lc code=end

