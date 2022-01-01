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
// var findCircleNum = function(isConnected) {
//     let res = 0,
//         visited = [];
    
//     const len = isConnected.length;


//     const dfs = (index) => {
//         visited[index] = true;

//         for (let i = 0; i < len; i++) {
//             if (isConnected[index][i] == 1 && !visited[i]) {
//                 dfs(i)
//             }
//         }
//     }
//     for (let i = 0; i < len; i++) {
//         if (!visited[i]) {
//             res++;
//             dfs(i);
//         }
//     }
//     return res;
// };


// BFS 广度优先遍历
// var findCircleNum = (isConnected) => {
//     let res = 0, len = isConnected.length;
//     const visited = [], queue = [];

//     for (let i = 0; i < len; i++) {
//         if (!visited[i]) {
//             queue.push(i);
//             res++;
//             while (queue.length > 0) {
//                 const item = queue.shift();
//                 visited[item] = true;
//                 for (let j = 0; j < len; j++) {
//                     if (isConnected[item][j] == 1 && !visited[j]) {
//                         queue.push(j);
//                     }
//                 }
//             }
//         }
//     }
//     return res;
// }

// 并查集
var findRedundantConnection = function (edges) {
    const n = edges.length;
    const parent = new Array(n + 1).fill(0).map((value, index) => index);
    for (let i = 0; i < n; i++) {
        const edge = edges[i];
        const node1 = edge[0], node2 = edge[1];
        if (find(parent, node1) != find(parent, node2)) {
            union(parent, node1, node2);
        } else {
            return edge;
        }
    }
    return [0];
};

const union = (parent, index1, index2) => {
    parent[find(parent, index1)] = find(parent, index2);
}

const find = (parent, index) => {
    if (parent[index] !== index) {
        parent[index] = find(parent, parent[index]);
    }
    return parent[index];
}
// @lc code=end

