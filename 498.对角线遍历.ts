/*
 * @lc app=leetcode.cn id=498 lang=typescript
 *
 * [498] 对角线遍历
 */

// @lc code=start
function findDiagonalOrder(mat: number[][]): number[] {
    let m = mat.length, n = mat[0].length;
    const ans = new Array(m * n).fill(0);
    let pos = 0;
    for (let i = 0; i < m + n - 1; i++) {
        if (i % 2 === 0) {// 偶数
            let x = i < m ? i : m - 1;
            let y = i < m ? 0 : i - m + 1;
            while (x >= 0 && y < n) {
                ans[pos] = mat[x][y];
                pos++;
                x--;
                y++;
            }
        } else {
            let x = i < n ? 0 : i - n + 1;
            let y = i < n ? i : n - 1;
            while (x < m && y >= 0) {
                ans[pos] = mat[x][y]
                pos++;
                x++;
                y--;
            }
        }
    }
    return ans;
};
// @lc code=end

