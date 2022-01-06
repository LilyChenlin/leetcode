🔗 [547. 省份数量](https://leetcode-cn.com/problems/number-of-provinces/)

# 思路

传统的并查集思路

1. 初始化数组parent，使用parent来记录节点的父节点

```JavaScript
const parent = new Array(n).fill(0).map((item, index) => index);
```

2. 遍历矩阵，如果是1的话就连通parant

```JavaScript
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < m; j++) {
            if (isConnected[i][j] === 1) {// 连通，需要合并
                union(parent, i, j)
            }
        }
    }

```

3. 连通两个节点

```JavaScript
const union = (parent, node1, node2) => {
    parent[find(parent, node1)] = find(parent, node2);
}

```

4. 递归寻找到节点的父节点

```JavaScript
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
```

5. 最后通过判断parent中的值和index值是否相等，就能得出省份数量

```JavaScript
    let ans = 0;
    parent.forEach((item, index) => {
        if (index === item) {
            ans++;
        }
    })
    return ans;
```



# 代码

```JavaScript
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
```

