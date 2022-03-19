/*
 * @lc app=leetcode.cn id=46 lang=typescript
 *
 * [46] 全排列
 */

// @lc code=start
function permute(nums: number[]): number[][] {
    let len = nums.length, res = [];
    let visited = [];
    let bfs = (solution) => {
        if (solution.length === len) {
            res.push([...solution]);
            return;
        } else {
            for(let i = 0; i < len; i++) {
                if (!visited[nums[i]]) {
                    solution.push(nums[i]);
                    visited[nums[i]] = true;
                    bfs(solution);
                    solution.pop();
                    visited[nums[i]] = false;
                }
            }
        }
    }
    bfs([])
    return res;
};
// @lc code=end

