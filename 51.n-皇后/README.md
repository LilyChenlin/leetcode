🔗 [51. N 皇后](https://leetcode-cn.com/problems/n-queens/)

# 题目

n 皇后问题 研究的是如何将 n 个皇后放置在 n×n 的棋盘上，并且使皇后彼此之间不能相互攻击。

给你一个整数 n ，返回所有不同的 n 皇后问题 的解决方案。

每一种解法包含一个不同的 n 皇后问题 的棋子放置方案，该方案中 'Q' 和 '.' 分别代表了皇后和空位。

示例 1：

![image.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/3c6575a523224ecb81a4609e709cc555~tplv-k3u1fbpfcp-watermark.image?)

```
输入：n = 4
输出：[[".Q..","...Q","Q...","..Q."],["..Q.","Q...","...Q",".Q.."]]
解释：如上图所示，4 皇后问题存在两个不同的解法。
```

**示例 2：**

```
输入：n = 1
输出：[["Q"]]
```

# 思路

皇后的攻击路线是同一列/同一行/同一斜线

1.  首先针对斜线进行分析，斜线有两种状态

    1.  从左上到右下
    1.  从右上到左下

1.  从左上右下，参考如下图


![image.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/468ccdbe6c724805adffdfe47a695bb9~tplv-k3u1fbpfcp-watermark.image?)

可以发现，在同一条斜线上，row - col的值始终相等。

3.  从右上到左下

![image.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/04e433cb3f8c4d99aedc59efddf59234~tplv-k3u1fbpfcp-watermark.image?)
![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/c36e7d8e1ab5479e9a54e3f40b3b53af~tplv-k3u1fbpfcp-zoom-1.image)

可以发现，在同一斜线上，row + col的值始终相等

因此，我们可以通过columns，diagonals1，diagonals2来分别标记已经使用到的列、2两种斜线。

在每次放置皇后的时候，可以判断这个位置是否存在以上三个集合中，如果不存在，则可以正常放置皇后。

# 代码

```javascript
var solveNQueens = function(n) {
    const solution = [], // 记录最后结果数组
        queens = new Array(n).fill(-1), // 记录每一组结果
        columns = new Map(),
        diagonals1 = new Map(),
        diagonals2 = new Map();
    
    // row 当前遍历到的行
    let backtrack = (row) => {
        if (row == n) {
            let ans = generateBoard(queens, n)
            solution.push(ans);
            return;
        } else {
            // 对列进行遍历
            for (let i = 0; i < n; i++) {
                if (columns.has(i)) {
                    continue;
                }
                const val1 = row + i;
                if (diagonals1.has(val1)) continue;

                const val2 = row - i;
                if (diagonals2.has(val2)) continue;

                queens[row] = i;
                columns.set(i);
                diagonals1.set(val1);
                diagonals2.set(val2);
                backtrack(row + 1);
                queens[row] = -1;
                columns.delete(i);
                diagonals1.delete(val1);
                diagonals2.delete(val2)

            }
        }
    }
    backtrack(0);
    return solution;
};

let generateBoard = (queens, n) => {
    let ans = [];
    for (let i = 0; i < n; i++) {
        let res = new Array(n).fill('.');
        res[queens[i]] = 'Q';
        ans.push(res.join(''));
    }
    return ans;

}
```