/*
 * @lc app=leetcode.cn id=51 lang=javascript
 *
 * [51] N 皇后
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function (n) {
    // 存放最后的结果值
    let solutions = [];

    // 存放一种解决
    const queens = [];

    let columns = new Set();
    let diagonals1 = new Set();
    let diagonals2 = new Set();


    // 当前遍历的行
    let backtrack = (row) => {
        if (row === n) {
            let board = generateBoard(queens, n)
            solutions.push(board);
        } else {
            for (let i = 0; i < n; i++) {
                if (columns.has(i)) {
                    continue;
                }
                const diagonal1 = row - i;
                if (diagonals1.has(diagonal1)) {
                    continue;
                }

                const diagonal2 = row + i;
                if (diagonals2.has(diagonal2)) {
                    continue;
                }
                queens[row] = i;
                columns.add(i);
                diagonals1.add(diagonal1);
                diagonals2.add(diagonal2);
                backtrack(row + 1);

                queens[row] = -1;
                columns.delete(i);
                diagonals1.delete(diagonal1);
                diagonals2.delete(diagonal2);
            }
        }
    }
    backtrack(0);


    return solutions;
};

let generateBoard = (queens, n) => {
    let board = [];
    for (let i = 0; i < n; i++) {
        let row = new Array(n).fill('.');
        row[queens[i]] = 'Q';
        board.push(row.join(''));
    }
    return board;
}

// @lc code=end

