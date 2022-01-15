🔗[367. 有效的完全平方数](https://leetcode-cn.com/problems/valid-perfect-square/)

# 题目

给定一个 正整数 num ，编写一个函数，如果 num 是一个完全平方数，则返回 true ，否则返回 false 。

进阶：不要 使用任何内置的库函数，如  sqrt 。

**示例 1：**

```JavaScript
输入：num = 16
输出：true
```

**示例 2：**

```JavaScript
输入：num = 14
输出：false
```

# 思路

1. 这道题也可以使用二分查找来完成。
2. 如果num是完全平方数，那么一定存在x * x = num，那么这个x一定满足0≤x<num，因此我们可以将1和num作为二分查找搜索区间的初始边界。
3. 其他思路其实和278、374、35大差不差，只是相等的时候可以直接返回true。

# 代码

```JavaScript
function isPerfectSquare(num: number): boolean {
    if (num === 1) return true;
    let left = 0, right = num;
    while(left < right) {
        const mid = left + Math.floor((right - left) / 2);
        const value = mid * mid;
        if (value < num) {
            left = mid + 1;
        } else if (value > num) {
            right = mid;
        } else {
            return true;
        }
    }
    return false;
};
```