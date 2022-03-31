/*
 * @lc app=leetcode.cn id=78 lang=typescript
 *
 * [78] 子集
 */

// @lc code=start
function subsets(nums: number[]): number[][] {
    let res = [];
    let temp = [];
    let dfs = (start: number) => {
        if (start > nums.length) {
            return;
        } else {
            res.push([...temp]);
            for (let i = start; i < nums.length; i++) {
                temp.push(nums[i]);
                dfs(i + 1);
                temp.pop();
            }
        }

    }

    dfs(0);
    return res;
};
// @lc code=end

