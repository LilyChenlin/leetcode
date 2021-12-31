/*
 * @lc app=leetcode.cn id=547 lang=javascript
 *
 * [547] 省份数量
 */

// @lc code=start
/**
 * @param {number[][]} isConnected
 * @return {number}
 */

 // DFS 深度优先遍历
var findCircleNum = function(isConnected) {
    let res = 0,
        visited = [];
    
    const len = isConnected.length;


    const dfs = (index) => {
        visited[index] = true;

        for (let i = 0; i < len; i++) {
            if (isConnected[index][i] == 1 && !visited[i]) {
                dfs(i)
            }
        }
    }
    for (let i = 0; i < len; i++) {
        if (!visited[i]) {
            res++;
            dfs(i);
        }
    }
    return res;
};

// @lc code=end

