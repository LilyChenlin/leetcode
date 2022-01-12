🔗[278. 第一个错误的版本](https://leetcode-cn.com/problems/first-bad-version/)

# 题目

你是产品经理，目前正在带领一个团队开发新的产品。不幸的是，你的产品的最新版本没有通过质量检测。由于每个版本都是基于之前的版本开发的，所以错误的版本之后的所有版本都是错的。

假设你有 `n` 个版本 `[1, 2, ..., n]`，你想找出导致之后所有版本出错的第一个错误的版本。

你可以通过调用 `bool isBadVersion(version)` 接口来判断版本号 `version` 是否在单元测试中出错。实现一个函数来查找第一个错误的版本。你应该尽量减少对调用 API 的次数。

示例1：

```JavaScript
输入：n = 5, bad = 4
输出：4
解释：
调用 isBadVersion(3) -> false 
调用 isBadVersion(5) -> true 
调用 isBadVersion(4) -> true
所以，4 是第一个错误的版本。
```

示例2：

```JavaScript
输入：n = 1, bad = 1
输出：1
```

# 思路

1. 循环结束条件 left < right, 说明有循环结束的时候, left === right
2. mid取值

```JavaScript
const mid = left + Math.floor((right - left) / 2);
```
- 这里mid的求值和(left + right) / 2值结果是一样，但是我们为什么要使用left + Math.floor((right - left) / 2)呢？
    因为有效防止了left 和 right 值相加太大导致溢出
- 搜索区间对mid上下取整的影响
        1. 如果区间划分逻辑是left = mid + 1, right = mid; while(left < right)退出循环后，left === right,成立，mid正常下取整数就行
        2. 如果区间划分逻辑是left = mid, right = mid - 1; while (left < right)退出循环后, left === right成立，为了避免死循环，left向上取整   
3. 返回值 

    此时left === righ，返回left/right都可

# 代码

```JavaScript
var solution = function(isBadVersion){
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
      let left = 1, right = n;
      while (left < right) {
        const mid = left + Math.floor((right - left) / 2);
        if (isBadVersion(mid)) {
          right = mid;
        } else {
          left = mid + 1;
        }
      }
      
      // left === right 返回right也可以
      return left;
    };
}
```