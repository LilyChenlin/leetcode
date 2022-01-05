/*
 * @lc app=leetcode.cn id=399 lang=javascript
 *
 * [399] 除法求值
 */

// @lc code=start
/**
 * @param {string[][]} equations
 * @param {number[]} values
 * @param {string[][]} queries
 * @return {number[]}
 */
var calcEquation = function(equations, values, queries) {
    let parent = [], // 存储父节点
        weight = []; // 存储权重
    
    
    // 并查集模版
    const n = equations.length * 2;
    // 初始化并查集
    const init = () => {
        parent = new Array(n).fill(0).map((item, index) => index);
        weight = new Array(n).fill(1.0);
    }

    const union = (x, y, value) => {
        const rootX = find(x), rootY = find(y);
        if (rootX == rootY) return;
        parent[rootX] = rootY;
        weight[rootX] = weight[y] * value / weight[x];
    }

    // 寻找自己的父节点
    const find = (x) => {
        if (x != parent[x]) {// 已经有父节点了
            let item = parent[x];
            parent[x] = find(parent[x]); // 递归寻找最上级父节点
            weight[x] *= weight[item]; 
        }
        return parent[x];
    }

    const isConnected = (x, y) => {
        const rootX = find(x), rootY = find(y);
        if (rootX == rootY) {
            return weight[x] / weight[y];
        } else {
            return -1.0;
        }
    }


    init();
    const hashMap = new Map();
    let idx = 0;
    for (let i = 0; i < equations.length; i++) {
        let [val1, val2] = equations[i];
        if (!hashMap.has(val1)) {
            hashMap.set(val1, idx);
            idx++;
        }

        if (!hashMap.has(val2)) {
            hashMap.set(val2, idx);
            idx++;
        }
        union(hashMap.get(val1), hashMap.get(val2), values[i])
    }

    const queriesLength = queries.length;
    let res = [];
    for (let i = 0; i < queriesLength; i++) {
        let [val1, val2] = queries[i];

        let id1 = hashMap.get(val1), id2 = hashMap.get(val2);
        if (id1 == null || id2 == null) {
            res[i] = -1.0
        } else {
            res[i] = isConnected(id1, id2);
        }
    }
    return res;
 }
// @lc code=end

