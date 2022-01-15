/*
 * @lc app=leetcode.cn id=52 lang=javascript
 *
 * [52] N皇后 II
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var totalNQueens = function(n) {
    let queens = [];
    let res = 0;

    let columns = new Set();
    let diagonals1 = new Set();
    let diagonals2 = new Set();

    let backTrack = (row) => {
        if (row === n) {
            res++;
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
                backTrack(row + 1);
                columns.delete(i);
                diagonals1.delete(diagonal1);
                diagonals2.delete(diagonal2);
            }
        }
    }

    backTrack(0);
    return res;
};
// @lc code=end

