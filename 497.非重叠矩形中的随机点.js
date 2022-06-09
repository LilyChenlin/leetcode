/*
 * @lc app=leetcode.cn id=497 lang=typescript
 *
 * [497] 非重叠矩形中的随机点
 */

// @lc code=start
/**
 * @param {number[][]} rects
 */
var Solution = function (rects) {
    this.rects = rects;
    this.total = 0;
    let points = 0;
    this.randomRate = [];
    this.rects = rects.map(i => {
        points = (i[2] - i[0] + 1) * (i[3] - i[1] + 1);
        this.randomRate.push(points);
        this.total += points;
        return i;
    })
};

/**
 * @return {number[]}
 */
Solution.prototype.pick = function () {
    const curRate = Math.random() * this.total;
    let rate = 0;
    const index = this.randomRate.findIndex(i => {
        rate += i;
        return rate >= curRate;
    })
    const ret = this.rects[index];
    return [Math.floor((ret[2] - ret[0] + 1) * Math.random()) + ret[0], Math.floor((ret[3] - ret[1] + 1) * Math.random()) + ret[1]];
};

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(rects)
 * var param_1 = obj.pick()
 */

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(rects)
 * var param_1 = obj.pick()
 */
// @lc code=end

