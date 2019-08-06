# leetcode
leetcode 刷题记录 🖊 🏷

## 双指针

如果遇到排序数组，可以考虑到用双指针

- 题目

  [26.删除排序数组中的重复项](https://github.com/LilyChenlin/leetcode/blob/master/26.删除排序数组中的重复项.html) （快慢指针）

  [125.验证回文串](https://github.com/LilyChenlin/leetcode/blob/master/125.验证回文串.html)  （头尾指针）

  [680.验证回文字符串二](https://github.com/LilyChenlin/leetcode/blob/master/680.验证回文字符串二.html)

  

## 二叉树
### 层次遍历
具体做法：
1. 根节点入队列， 并入队列一个特殊的标识位，此处是 null
2. 出队列
3. 判断是不是 null， 如果是则代表本层已经结束。我们再次判断是否当前队列为空，如果不为空继续入队一个 null，否则说明遍历已经完成，我们什么都不不用做
4. 如果不为 null，说明这一层还没完，则将其左右子树依次入队列。

- 题目

  [102.二叉树的层次遍历](https://github.com/LilyChenlin/leetcode/blob/master/102.二叉树的层次遍历.html)

  [104.二叉树的最大深度](https://github.com/LilyChenlin/leetcode/blob/master/104.二叉树的最大深度.html)

## 异或

相同数字返回0 不同数字返回1

任何数和本身异或都为0

任何数和0异或都是自己本身

 2 ^ 0 = 2

  2 ^ 2 = 0

- 题目

  [136.只出现一次的数字](https://github.com/LilyChenlin/leetcode/blob/master/136.只出现一次的数字.html)



## 动态规划

- 题目

  [91.解码方法](https://github.com/LilyChenlin/leetcode/blob/master/91.解码方法.html)

  [139.单词拆分]

## 排序

### 交换排序

**1. 冒泡排序**

> 空间复杂度 O(1) 时间复杂度 O(n ^ 2)

**2.快速排序**