/*
 * @lc app=leetcode.cn id=332 lang=javascript
 *
 * [332] 重新安排行程
 */

// @lc code=start
/**
 * @param {string[][]} tickets
 * @return {string[]}
 */
var findItinerary = function(tickets) {
    let map = {},
        res = ['JFK'];
    
    for (let item of tickets) {
        let [from, to] = item;
        if (!map[from]) {
            map[from] = [];
        }
        map[from].push(to)
    }

    // 按字典树顺序大小排序
    for (const key in map) {
        map[key].sort();
    }

    /**
     * @description 回溯
     * @param {*} city 当前飞到的城市
     * @param {*} used 当前使用的飞机票
     */
    let backTrack = (city, used) => {
        if (used === tickets.length) return true;
        const nextTickets = map[city];
        if (!nextTickets || nextTickets == 0) {// 没有响铃城市
            return false;
        }
        for (let i = 0; i < nextTickets.length; i++) {
            let next = nextTickets[i];
            nextTickets.splice(i, 1);
            res.push(next);

            if (backTrack(next, used + 1)) {
                return true;
            } else {
                nextTickets.splice(i, 0, next);
                res.pop();
            }
        }
    }
    backTrack('JFK', 0);
    return res;
};
// @lc code=end

