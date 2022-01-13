🔗[374. 猜数字大小](https://leetcode-cn.com/problems/guess-number-higher-or-lower/)

# 题目

猜数字游戏的规则如下：

每轮游戏，我都会从 1 到 n 随机选择一个数字。 请你猜选出的是哪个数字。
如果你猜错了，我会告诉你，你猜测的数字比我选出的数字是大了还是小了。
你可以通过调用一个预先定义好的接口 int guess(int num) 来获取猜测结果，返回值一共有 3 种可能的情况（-1，1 或 0）：

-1：我选出的数字比你猜的数字小 pick < num
1：我选出的数字比你猜的数字大 pick > num
0：我选出的数字和你猜的数字一样。恭喜！你猜对了！pick == num
返回我选出的数字。

**示例 1：**

```JavaScript
输入：n = 10, pick = 6
输出：6
```

**示例 2：**

```JavaScript
输入：n = 1, pick = 1
输出：1
```

# 思路

这道题思路和278可以说是一模一样，注意区间即可

# 代码

```JavaScript
/**
 * @param {number} n
 * @return {number}
 */
var guessNumber = function (n) {
    let left = 1, right = n;
    while (left < right) {
        let mid = left + Math.floor((right - left) / 2);
        if (guess(mid) <= 0) { // target < mid
            right = mid;
        } else {
            left = mid + 1
        }
    }
    return left;
};
```

