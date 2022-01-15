🔗[35. 搜索插入位置](https://leetcode-cn.com/problems/search-insert-position/)

# 题目

给定一个排序数组和一个目标值，在数组中找到目标值，并返回其索引。如果目标值不存在于数组中，返回它将会被按顺序插入的位置。

请必须使用时间复杂度为 O(log n) 的算法。

**示例 1:**

```JavaScript
输入: nums = [1,3,5,6], target = 5
输出: 2

```

**示例 2:**

```JavaScript
输入: nums = [1,3,5,6], target = 2
输出: 1

```

**示例3：**

```JavaScript
输入: nums = [1,3,5,6], target = 7
输出: 4
```

**示例 4:**

```JavaScript
输入: nums = [1,3,5,6], target = 0
输出: 0
```

**示例 5:**

```JavaScript
输入: nums = [1], target = 0
输出: 0
```

# 思路

与278.374相同

# 代码

```JavaScript
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
  let left = 0, right = nums.length;
  let ans = 0;
  while (left < right) {
    let mid = left + Math.floor((right - left) / 2);
    if(nums[mid] < target) {
      ans = left;
      left = mid + 1;
    } else {
      right = mid;
    }
  }
  return left;
};
```