传统的并查集思路

1. 初始化并查集

```JavaScript
    // 并查集
    let vector = [];
    // 初始化
    const init = () => {
        vector = new Array(n + 1).fill(0).map((item, index) => index)
    }
```
2. 合并边到并查集中

```JavaScript
    // 将node1 -> node2 将边加入并查集
    const add = (parent, child) => {
        const val1 = find(parent), val2 = find(child);
        if (val1 === val2) return;
        vector[child] = parent;
    }
```
3. 查找节点的父节点（这里的父节点是指最顶层父节点）

```JavaScript
    // 并查集中寻找该节点的父节点
    const find = (node) => {
        if (vector[node] === node) {
            return node;
        } else {
            return find(vector[node])
        }
    }
```
4. 判断两个节点是否是一个父节点

```JavaScript
    // 判断两个节点是否是同一个父节点
    const same = (node1, node2) => {
        const val1 = find(node1), val2 = find(node2);
        return val1 === val2;
    }
```