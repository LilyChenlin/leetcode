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
// 并查集
var findRedundantConnection = function (edges) {
    const len = edges.length;
    const parent = new Array(len + 1).fill(0).map((item, index) => index);

    for (let i = 0; i < len; i++) {
        const item = edges[i];
        const idx1 = item[0], idx2 = item[1];
        if (find(parent, idx1) !== find(parent, idx2)) {
            union(parent, idx1, idx2);
        } else {
            return item;
        }
    }
    return [0];
};

const find = (parent, index) => {
    if (parent[index] !== index) {
        parent[index] = find(parent, parent[index]);
    }
    return parent[index];
}

const union = (parent, index1, index2) => {
    parent[find(parent, index1)] = find(parent, index2);
}


// @lc code=end

