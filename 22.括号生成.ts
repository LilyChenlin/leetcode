/*
 * @lc app=leetcode.cn id=22 lang=typescript
 *
 * [22] 括号生成
 */

// @lc code=start
function generateParenthesis(n: number): string[] {
    let res = [];
    let dfs = (path, left, right) => {
        if (left == 0 && right == 0) {
            res.push(path.join(''));
            return res;
        }
        if (left > right) return;
        if (left > 0) {
            path.push('(');
            dfs(path, left - 1, right);
            path.pop();
        }
        if (right > 0) {
            path.push(')');
            dfs(path, left, right - 1);
            path.pop();
        }
    }
    dfs([], n, n);
    return res;
};
// @lc code=end

