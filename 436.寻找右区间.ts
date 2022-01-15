/*
 * @lc app=leetcode.cn id=436 lang=typescript
 *
 * [436] 寻找右区间
 */

// @lc code=start
function findRightInterval(intervals: number[][]): number[] {
    let res = new Array(intervals.length).fill(-1), map = [];


    for (let i = 0; i < intervals.length; i++) {
        let firstVal = intervals[i][0];
        map[firstVal] = i;
    }

    intervals = intervals.sort((a, b) => a[0] - b[0]);

    for (let i = 0; i < intervals.length; i++) {
        const targetVal = intervals[i][1];
        let left = 0, right = intervals.length - 1;
        while (left <= right) {
            const mid = left + Math.floor((right - left) / 2);
            if (intervals[mid][0] >= targetVal) {
                res[map[intervals[i][0]]] = map[intervals[mid][0]];
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        }
    }
    return res;
};


// @lc code=end

