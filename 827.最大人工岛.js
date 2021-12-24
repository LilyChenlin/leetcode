/*
 * @lc app=leetcode.cn id=827 lang=javascript
 *
 * [827] 最大人工岛
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var largestIsland = function(grid) {
    // 第一步 遍历岛屿，记录每一块陆地面积值，并将同一块陆地置为相同index
    let row = grid.length, col = grid[0].length;
    // 由于岛中不是0就是1，为避免冲突，所以从2开始进行标记每一块陆地岛
    let index = 2,
        maxArea = 0,  // 记录陆地的最大值
    const map = new Map();
    for (let i = 0; i < row; i++) {
        for (let j = 0; j < col; j++) {
            if (grid[i][j] === 1) {
                let ans = area(grid, i, j, index);
                map.set(index, ans);
                maxArea = Math.max(maxArea, ans)
                index++;
            }
        }
    }

    // 第二步 遍历海洋，找出相邻陆地面积最大的海洋格子

    let maxRes = 0;
    for (let i = 0; i < row; i++) {
        for (let j = 0; j < col; j++) {
            if (grid[i][j] === 0) {
                let maxArea = plusArea(grid, i, j, map);
                maxRes = Math.max(maxRes, maxArea)
            }
        }
    }

    maxRes = Math.max(maxArea, maxRes);
    return maxRes;
};

/**
 * 计算每个岛屿的面积
 * @param {Array} grid
 * @param {Number} row
 * @param {Number} col
 * @param {Number} index 
 */
let area = (grid, row, col, index) => {
    if (!isArea(grid, row, col)) { return 0 };
    if (grid[row][col] !== 1) return 0;

    grid[row][col] = index;
    return 1 + area(grid, row - 1, col, index) + area(grid, row + 1, col, index) + area(grid, row, col - 1, index) + area(grid, row, col + 1, index);
}

let isArea = (grid, row, col) => {
    return 0 <= row && row < grid.length && 0 <= col && col < grid[0].length;
}

/**
 * 叠加面积
 * @param {Array} grid 
 * @param {Number} row 
 * @param {Number} col 
 * @param {Map} map 
 */
let plusArea = (grid, row, col, map) => {
    if (!isArea(grid, row, col)) return;
    if (grid[row][col] !== 0) return

    let size = 0, set = new Set();
    if (isArea(grid, row - 1, col) && grid[row - 1][col] >= 2) {
        set.add(grid[row - 1][col]);
    }
    if (isArea(grid, row + 1, col) && grid[row + 1][col] >= 2) {
        set.add(grid[row + 1][col]);
    }
    if (isArea(grid, row, col - 1) && grid[row][col - 1] >= 2) {
        set.add(grid[row][col - 1]);
    }
    if (isArea(grid, row, col + 1) && grid[row][col + 1] >= 2) {
        set.add(grid[row][col + 1])
    }

    for (let item of set.values()) {
        size += map.get(item);
    }
    size++;
    return size;
}
// @lc code=end

