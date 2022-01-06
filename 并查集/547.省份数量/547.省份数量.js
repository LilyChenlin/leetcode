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
var findCircleNum = function(isConnected) {
    const n = isConnected.length, m = isConnected[0].length;
    // 初始化 
    const parent = new Array(n).fill(0).map((item, index) => index);

    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < m; j++) {
            if (isConnected[i][j] === 1) {// 连通，需要合并
                union(parent, i, j)
            }
        }
    }

    let ans = 0;
    parent.forEach((item, index) => {
        if (index === item) {
            ans++;
        }
    })
    return ans;

};

const union = (parent, node1, node2) => {
    parent[find(parent, node1)] = find(parent, node2);
}

/**
 * @description 寻找到节点的父节点
 * @param {*} parent 
 * @param {*} node 
 */
const find = (parent, node) => {
    if (parent[node] !== node) {
        parent[node] = find(parent, parent[node]);
    } 
    return parent[node]
}
// @lc code=end

