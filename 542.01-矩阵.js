/*
 * @lc app=leetcode.cn id=542 lang=javascript
 *
 * [542] 01 矩阵
 */

// @lc code=start
/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
var updateMatrix = function(mat) {
    const row = mat.length, col = mat[0].length;
    let queue = [];
    for (let i = 0; i < row; i++) {
        for (let j = 0; j < col; j++) {
            if (mat[i][j] === 0) {
                queue.push([i, j])
            } else {
                mat[i][j] = -1;
            }
        }
    }

    let dx = [-1, 1, 0, 0], dy = [0, 0, -1, 1];

    while (queue.length > 0) {
        let temp = queue.shift();
        const x = temp[0], y = temp[1];
        for (let i = 0; i < 4; i++) {
            const newX = x + dx[i], newY = y + dy[i];
            if (newX >= 0 && newX < row && newY >= 0 && newY < col && mat[newX][newY] == -1) {
                mat[newX][newY] = mat[x][y] + 1;
                queue.push([newX, newY])
            }
        }
    }
    return mat
};
// @lc code=end

