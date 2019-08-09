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

  [139.单词拆分](https://github.com/LilyChenlin/leetcode/blob/master/139.单词拆分.html)

## 排序

### 交换排序

**1. 冒泡排序**

> 空间复杂度 O(1) 时间复杂度 O(n ^ 2)
>
> 遍历数组，从第一个元素开始，把当前元素和下一个元素进行比较，如果下一个元素大于当前元素，交换位置，重复操作直到最后一个元素，此时最后一个元素是当前数组中最大的元素。下一轮循环就可以不用比较最后一个元素

**2.快速排序**

> 随机选择一个数组中的值作为基准值。遍历数组，将比基准值大的数值放在基准值的右边，小的放在基准值的左边，对比完成后将基准值和第一个比基准值大的值交换位置。将数组以基准值再分成两个部分，继续遍历。

**3.插入排序**

> 插入排序默认第一个元素是已经排序好的元素。取出第二个元素与第一个元素比较，如果第一个元素大于第二个元素，则交换位置。那么此时第一个元素就是当前的最小数，则下一次取出第三个元素，依次向前比较。

**4.希尔排序** 

> 希尔排序又称为缩小增量排序。
>
> 如数组 array = {3, 4, 5, 1, 2,6} 数组长度为5 6/2为3 分成数组{3,1}{4,2}{5,6}进行各自比较，交换位置。如果数组划分以后 数组内元素大于2 则进一步划分，以此那内推

**5.选择排序**

> 选择排序的原理如下。遍历数组，设置最小值的索引为 0，如果取出的值比当前最小值小，就替换最小值索引，遍历完成后，将第一个元素和最小值索引上的值交换。如上操作后，第一个元素就是数组中的最小值，下次遍历就可以从索引 1 开始重复上述操作。

