/*
 * @lc app=leetcode.cn id=79 lang=typescript
 *
 * [79] 单词搜索
 */

// @lc code=start
function exist(board: string[][], word: string): boolean {

    let m = board.length, n = board[0].length;
    let visited = new Array(m).fill(false).map(item => new Array(n).fill(false));
    let canFind = (i: number, j: number, start: number): boolean => {
        if (start === word.length) return true;
        if (i < 0 || i >= m || j < 0 || j >= n) return false;
        if (board[i][j] !== word[start] || visited[i][j]) {return false} 
        visited[i][j] = true;
        let canFindRest = canFind(i - 1, j, start + 1) || canFind(i + 1, j, start + 1) || canFind(i, j - 1, start + 1) || canFind(i, j + 1, start + 1);
        if (canFindRest) return true;
        visited[i][j] = false;
        return false;
    }

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (board[i][j] === word[0] && canFind(i, j, 0)) {
                return true;
            }
        }
    }
    return false;
};
// @lc code=end

