🔗[69. Sqrt(x)](https://leetcode-cn.com/problems/sqrtx/)

# 题目

给你一个非负整数 x ，计算并返回 x 的 算术平方根 。

由于返回类型是整数，结果只保留整数部分 ，小数部分将被舍去 。

注意：不允许使用任何内置指数函数和算符，例如 pow(x, 0.5) 或者 x ** 0.5 。

**示例 1：**

```JavaScript
输入：x = 4
输出：2
```

**示例2：**

```JavaScript
输入：x = 8
输出：2
解释：8 的算术平方根是 2.82842..., 由于返回类型是整数，小数部分将被舍去。
```

# 思路

1. 二分查找
2. 与367. 有效的完全平方数有类似的地方，可以通过判断 num * num 和 x 的大小，来找出x的算术平方根
3. 注意点
    1. 这道题为了防止溢出，不能使用mid * mid 和x来判断，可以通过mid 和 x / mid 来判断缩小范围。
    2. 当循环结束时，left的值一定就在平方根的附近，通过判断left值和x/left，如果相等，那么直接返回left，如果不等，那么返回left - 1。

# 代码

```JavaScript
function mySqrt(x: number): number {
    let left = 1, right = x;
    while (left < right) {
        const mid = left + Math.floor((right - left) / 2);
        if (mid < (x / mid)) {
            left = mid + 1;
        } else {
            right = mid;
        }
    }
    return left == x / left ? left : left - 1;
};

```



