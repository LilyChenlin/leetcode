🔗[207. 课程表](https://leetcode-cn.com/problems/course-schedule/)

# 题目

你这个学期必须选修 numCourses 门课程，记为 0 到 numCourses - 1 。

在选修某些课程之前需要一些先修课程。 先修课程按数组 prerequisites 给出，其中 prerequisites[i] = [ai, bi] ，表示如果要学习课程 ai 则 必须 先学习课程  bi 。

例如，先修课程对 [0, 1] 表示：想要学习课程 0 ，你需要先完成课程 1 。 请你判断是否可能完成所有课程的学习？如果可以，返回 true ；否则，返回 false 。

示例1

```
输入：numCourses = 2, prerequisites = [[1,0]]
输出：true
解释：总共有 2 门课程。学习课程 1 之前，你需要完成课程 0 。这是可能的。
```

示例2

```
输入：numCourses = 2, prerequisites = [[1,0],[0,1]]
输出：false
解释：总共有 2 门课程。学习课程 1 之前，你需要先完成​课程 0 ；并且学习课程 0 之前，你还应先完成课程 1 。这是不可能的。
```

# 思路

例子：numCourse2 = 5, prerequisites = [[1,4],[2,4],[3,1],[3,2]];

由prerequisites可知，如果想学习课程1，要先完成课程4。由此课程之间的依赖关系如下
![image.png](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/e86960b8994b4e7fbdb3fcc889651ee9~tplv-k3u1fbpfcp-watermark.image?)
各课程入度如下
![image.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/bc28a48c6e7a413b875cc9d6ba8de59b~tplv-k3u1fbpfcp-watermark.image?)

1.  入度为0的课程可以直接学习
1.  入度不为0的课程，在其所依赖的课程学习完后，入度-1，如果入度变为0，则可以学习。

代码实现思路

1.  首先需要计算各科目的入度

1.  使用Map记录该科目及其依赖该科目的所有科目，科目依赖关系

    1.  key为科目1，value为依赖科目1的所有科目数组

1.  BFS完成入度为0的数组遍历

# 代码

```javascript
/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {
    const inDegree = new Array(numCourses).fill(0); // 存储入度数组
    const map = new Map(); // 存储课程及依赖该课程的所有课程数组

    // 记录所有依赖关系
    for (let i = 0; i < prerequisites.length; i++) {
        inDegree[prerequisites[i][0]]++;
        if (map.has(prerequisites[i][1])) {
            const curArr = map.get(prerequisites[i][1]);
            map.set(prerequisites[i][1], curArr.push(prerequisites[i][0]))
        } else {
            map.set(prerequisites[i][1], [prerequisites[i][0]])
        }
    }


    // 筛选出所有入度为0的节点
    const queue = [];
    for (let i = 0; i < inDegree.length; i++) {
        if (inDegree[i] === 0) queue.push(i)
    }

    let count = 0;
    while (queue.length > 0) {
        const temp = queue.shift();
        count++;

        // 获取该课的后续课程
        const next = map.get(temp);
        if (next && next.length > 0) {
            for (let i = 0; i < next.length; i++) {
                inDegree[next[i]]--;
                if (inDegree[next[i]] === 0) queue.push(next[i]);
            }
        }
    }
    return count === numCourses;
};
```