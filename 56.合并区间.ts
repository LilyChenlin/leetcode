/*
 * @lc app=leetcode.cn id=56 lang=typescript
 *
 * [56] 合并区间
 */

// @lc code=start
function merge(intervals: number[][]): number[][] {
    intervals.sort((a, b) => a[0] - b[0]);
    let res = [];
    let temp = intervals[0];
    for(let i = 1; i < intervals.length; i++) {
        let beforeLeft = temp[0], beforeRight = temp[1];
        // 合并
        if (beforeLeft <= intervals[i][0] && beforeRight >= intervals[i][0]) {
            temp = [beforeLeft, Math.max(beforeRight, intervals[i][1])]
        } else {// 不合并
            res.push(temp);
            temp = intervals[i]
        }
    }
    res.push(temp);
    return res;
};
// @lc code=end

