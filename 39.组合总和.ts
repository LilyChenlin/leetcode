/*
 * @lc app=leetcode.cn id=39 lang=typescript
 *
 * [39] 组合总和
 */

// @lc code=start
function combinationSum(candidates: number[], target: number): number[][] {
    let res = [], temp = [];
    let dfs = (value, begin) => {
        if (value <= 0) {
            if (value === 0) {
                res.push([...temp]);
                return;
            }
        } else {
            for (let i = begin; i < candidates.length; i++) {
                temp.push(candidates[i]);
                dfs(value - candidates[i], i);
                // 剪枝
                temp.pop();
            }
        }
    }

    dfs(target, 0);
    return res;
};
// @lc code=end

