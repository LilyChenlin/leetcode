/*
 * @lc app=leetcode.cn id=210 lang=javascript
 *
 * [210] 课程表 II
 */

// @lc code=start
/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function(numCourses, prerequisites) {
    const inDegree = new Array(numCourses).fill(0);
    const map = {};

    for (let i = 0; i < prerequisites.length; i++) {
        inDegree[prerequisites[i][0]]++;
        if (map[prerequisites[i][1]]) {
            map[prerequisites[i][1]].push(prerequisites[i][0])
        } else {
            map[prerequisites[i][1]] = [prerequisites[i][0]];
        }
    }

    const queue = [], res = [];
    for (let i = 0; i < inDegree.length; i++) {
        if (inDegree[i] === 0) {
            queue.push(i)
        }
    }

    let count = 0;
    while (queue.length > 0) {
        const temp = queue.shift();
        count++;
        res.push(temp);
        const next = map[temp]; // 获取其依赖数组
        if (next && next.length) {
            for (let i = 0; i < next.length; i++) {
                inDegree[next[i]]--;
                if (inDegree[next[i]] === 0) {
                    queue.push(next[i]);
                }
            }
        }
    }
    if (count === numCourses) {
        return res;
    } else {
        return []
    }
};
// @lc code=end

