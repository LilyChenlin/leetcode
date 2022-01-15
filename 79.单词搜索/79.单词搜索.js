/*
 * @lc app=leetcode.cn id=79 lang=javascript
 *
 * [79] 单词搜索
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
    let rows = board.length, cols = board[0].length, len = 0;
    const visited = new Array(rows).fill(false).map(() => new Array(cols).fill(false));

    /**
     * @description 判断是否能找到下一个节点
     * @param {*} row 
     * @param {*} col 
     * @param {*} index 
     */
    const canFind = (row, col, index) => {
        if (index == word.length) {
            return true;
        }
        if (row < 0 || row >= rows || col < 0 || col >= cols) {
            return false;
        }
        if (visited[row][col] || board[row][col] !== word[index]) {
            return false;
        }
        visited[row][col] = true;

        const canFindRest = canFind(row + 1, col, index + 1) || canFind(row - 1, col, index + 1) ||
            canFind(row, col + 1, index + 1) || canFind(row, col - 1, index + 1);
        
        if (canFindRest) {
            return true;
        }
        visited[row][col] = false;
        return false;
    }

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (board[i][j] == word[0] && canFind(i, j, 0)) {
                return true;
            }
        }
    }

    return false;

};
// @lc code=end

