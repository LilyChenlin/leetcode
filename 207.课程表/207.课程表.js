/*
 * @lc app=leetcode.cn id=207 lang=javascript
 *
 * [207] 课程表
 */

// @lc code=start
/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function (numCourses, prerequisites) {
    const inDegree = new Array(numCourses).fill(0); // 存储入度数组
    const map = {}; // 存储课程及依赖该课程的所有课程数组

    // 记录所有依赖关系
    for (let i = 0; i < prerequisites.length; i++) {
        inDegree[prerequisites[i][0]]++;
        if (map[prerequisites[i][1]]) {
            map[prerequisites[i][1]].push(prerequisites[i][0])
        } else {
            map[prerequisites[i][1]] = [prerequisites[i][0]];
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
        const next = map[temp];
        if (next && next.length) {
            for (let i = 0; i < next.length; i++) {
                inDegree[next[i]]--;
                if (inDegree[next[i]] === 0) queue.push(next[i]);
            }
        }

    }
    return count === numCourses;
};
// @lc code=end

