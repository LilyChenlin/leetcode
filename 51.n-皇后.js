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
var solveNQueens = function(n) {
    const solution = [], // 记录最后结果数组
        queens = new Array(n).fill(-1), // 记录每一组结果
        columns = new Map(),
        diagonals1 = new Map(),
        diagonals2 = new Map();
    
    // row 当前遍历到的行
    let backtrack = (row) => {
        if (row == n) {
            let ans = generateBoard(queens, n)
            solution.push(ans);
            return;
        } else {
            // 对列进行遍历
            for (let i = 0; i < n; i++) {
                if (columns.has(i)) {
                    continue;
                }
                const val1 = row + i;
                if (diagonals1.has(val1)) continue;

                const val2 = row - i;
                if (diagonals2.has(val2)) continue;

                queens[row] = i;
                columns.set(i);
                diagonals1.set(val1);
                diagonals2.set(val2);
                backtrack(row + 1);
                queens[row] = -1;
                columns.delete(i);
                diagonals1.delete(val1);
                diagonals2.delete(val2)

            }
        }
    }
    backtrack(0);
    return solution;
};

let generateBoard = (queens, n) => {
    let ans = [];
    for (let i = 0; i < n; i++) {
        let res = new Array(n).fill('.');
        res[queens[i]] = 'Q';
        ans.push(res.join(''));
    }
    return ans;

}
// @lc code=end

