# leetcode
leetcode 刷题记录 🖊 🏷

## 双指针

如果遇到排序数组，可以考虑到用双指针

- 题目

  [26.删除排序数组中的重复项]([https://github.com/LilyChenlin/leetcode/blob/master/26.%E5%88%A0%E9%99%A4%E6%8E%92%E5%BA%8F%E6%95%B0%E7%BB%84%E4%B8%AD%E7%9A%84%E9%87%8D%E5%A4%8D%E9%A1%B9.html](https://github.com/LilyChenlin/leetcode/blob/master/26.删除排序数组中的重复项.html)) （快慢指针）

  [125.验证回文串]([https://github.com/LilyChenlin/leetcode/blob/master/125.%E9%AA%8C%E8%AF%81%E5%9B%9E%E6%96%87%E4%B8%B2.html](https://github.com/LilyChenlin/leetcode/blob/master/125.验证回文串.html))  （头尾指针）

  [680.验证回文字符串二]([https://github.com/LilyChenlin/leetcode/blob/master/680.%20%E9%AA%8C%E8%AF%81%E5%9B%9E%E6%96%87%E5%AD%97%E7%AC%A6%E4%B8%B2%E4%BA%8C.html](https://github.com/LilyChenlin/leetcode/blob/master/680. 验证回文字符串二.html))

  

## 二叉树
### 层次遍历
具体做法：
1. 根节点入队列， 并入队列一个特殊的标识位，此处是 null
2. 出队列
3. 判断是不是 null， 如果是则代表本层已经结束。我们再次判断是否当前队列为空，如果不为空继续入队一个 null，否则说明遍历已经完成，我们什么都不不用做
4. 如果不为 null，说明这一层还没完，则将其左右子树依次入队列。

- 题目

  [102.二叉树的层次遍历]([https://github.com/LilyChenlin/leetcode/blob/master/102.%20%E4%BA%8C%E5%8F%89%E6%A0%91%E7%9A%84%E5%B1%82%E6%AC%A1%E9%81%8D%E5%8E%86.html](https://github.com/LilyChenlin/leetcode/blob/master/102. 二叉树的层次遍历.html))

  [104.二叉树的最大深度]([https://github.com/LilyChenlin/leetcode/blob/master/104.%E4%BA%8C%E5%8F%89%E6%A0%91%E7%9A%84%E6%9C%80%E5%A4%A7%E6%B7%B1%E5%BA%A6.html](https://github.com/LilyChenlin/leetcode/blob/master/104.二叉树的最大深度.html))

## 异或

相同数字返回0 不同数字返回1

任何数和本身异或都为0

任何数和0异或都是自己本身

 2 ^ 0 = 2

  2 ^ 2 = 0

- 题目

  [136.只出现一次的数字]([https://github.com/LilyChenlin/leetcode/blob/master/136.%E5%8F%AA%E5%87%BA%E7%8E%B0%E4%B8%80%E6%AC%A1%E7%9A%84%E6%95%B0%E5%AD%97.html](https://github.com/LilyChenlin/leetcode/blob/master/136.只出现一次的数字.html))

  