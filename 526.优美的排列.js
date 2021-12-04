/*
 * @lc app=leetcode.cn id=526 lang=javascript
 *
 * [526] 优美的排列
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var countArrangement = function (n) {
    let arr = new Array(n).fill(false)
    return dfs(n, 1, arr);
};

let dfs = (n, start, visited) => {
    if (n < start) return 1;

    let ans = 0;
    for (let i = 1; i <= n; i++) {
        if (!visited[i] && (i % start === 0 || start % i === 0)) {
            visited[i] = true;
            ans += dfs(n, start + 1, visited);
            visited[i] = false;
        }
    }

    return ans;
} 
// @lc code=end

