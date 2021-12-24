/*
 * @lc app=leetcode.cn id=1162 lang=javascript
 *
 * [1162] 地图分析
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxDistance = function(grid) {
    const row = grid.length, col = grid[0].length;
    const queue = [];
    let ans = -1;
    for (let i = 0; i < row; i++) {
        for (let j = 0; j < col; j++) {
            if (grid[i][j] === 1) {
                grid[i][j] = 0;
                queue.push([i, j])
            } else {
                grid[i][j] = -1;
            }
        }
    }

    const dx = [-1, 1, 0, 0], dy = [0, 0, -1, 1]
    while (queue.length) {
        const temp = queue.shift();
        const x = temp[0], y = temp[1];
        for (let i = 0; i < 4; i++) {
            const newX = x + dx[i], newY = y + dy[i];
            if (newX >= 0 && newX < row && newY >= 0 && newY < col && grid[newX][newY] == -1) {
                grid[newX][newY] = grid[x][y] + 1;
                ans = Math.max(ans, grid[newX][newY])
                queue.push([newX,newY]);
            }
        }
    }

    return ans;
};
// @lc code=end

