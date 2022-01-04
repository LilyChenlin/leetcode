/*
 * @lc app=leetcode.cn id=685 lang=javascript
 *
 * [685] 冗余连接 II
 */

// @lc code=start
/**
 * @param {number[][]} edges
 * @return {number[]}
 */
var findRedundantDirectedConnection = function (edges) {
    const n = edges.length;

    // 并查集
    let vector = [];
    // 初始化
    const init = () => {
        vector = new Array(n + 1).fill(0).map((item, index) => index)
    }

    // 并查集中寻找该节点的父节点
    const find = (node) => {
        if (vector[node] === node) {
            return node;
        } else {
            return find(vector[node])
        }
    }

    // 判断两个节点是否是同一个父节点
    const same = (node1, node2) => {
        const val1 = find(node1), val2 = find(node2);
        return val1 === val2;
    }

    // 将node1 -> node2 将边加入并查集
    const add = (parent, child) => {
        const val1 = find(parent), val2 = find(child);
        if (val1 === val2) return;
        vector[child] = parent;
    }

    // 在第三种情况，有向图中寻找到闭环的边
    const getRemoveEdge = () => {
        init();
        for (let i = 0; i < n; i++) {
            if (same(edges[i][0], edges[i][1])) {
                return edges[i];
            }
            add(edges[i][0], edges[i][1])
        }
        return [];
    }

    // 1. 遍历所有的节点，并记录节点的入度
    const inDegree = new Array(n + 1).fill(0);
    for (let i = 0; i < n; i++) {
        inDegree[edges[i][1]]++;
    }

    // 2. 倒序遍历，记录所有入度为2的节点
    const canDeleteNode = [];
    for (let i = n - 1; i >= 0; i--) {
        if (inDegree[edges[i][1]] === 2) {
            canDeleteNode.push(i);
        }
    }

    // 3. 删除边，看还是否能构成树，如果可以就直接返回
    let ifDeleteNodeCanTree = (edges, node) => {
        init();// 初始化并查集
        for (let i = 0; i < n; i++) {
            if (i == node) continue;
            if (same(edges[i][0], edges[i][1])) {
                return false;
            }
            add(edges[i][0], edges[i][1])
        }
        return true;
    }

    if (canDeleteNode.length > 0) {
        if (ifDeleteNodeCanTree(edges, canDeleteNode[0])) {
            return edges[canDeleteNode[0]]
        } else {
            return edges[canDeleteNode[1]]
        }
    }

    return getRemoveEdge();
};
// @lc code=end

