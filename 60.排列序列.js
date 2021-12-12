/*
 * @lc app=leetcode.cn id=60 lang=javascript
 *
 * [60] 排列序列
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var getPermutation = function(n, k) {
    let solution = [], res = [], visited = [];

    let backTrack = () => {
        if (solution.length === n) {
            res.push([...solution].join(''))
            return;
        } else {
            for (let i = 1; i <= n; i++) {
                if (!visited[i]) {
                    visited[i] = true;
                    solution.push(i);
                    backTrack();
                    solution.pop();
                    visited[i] = false;
                }

            }
        }
    }

    backTrack();
    return res[k - 1];
};
// @lc code=end

