/*
 * @lc app=leetcode.cn id=710 lang=javascript
 *
 * [710] 黑名单中的随机数
 */

/**
 * @param {number} n
 * @param {number[]} blacklist
 */
// 从[0, n - m)中取值，将此区间的在黑名单中的元素映射到[n - m, n)中

var Solution = function (n, blacklist) {
    this.whiteMap = new Map();
    const m = blacklist.length;
    this.bound = n - m;
    let black = new Set();
    // 将[n - m, m]的先扔过去 占位
    for (let i = 0; i < m; i++) {
        if (blacklist[i] >= this.bound) {
            black.add(blacklist[i]);
        }
    }
    console.log(black)

    // 将[0, n - m) 映射到whiteMap未映射到的区域
    let w = this.bound;
    for (let i = 0; i < m; i++) {
        if (blacklist[i] < this.bound) {
            while (black.has(w)) {
                w++;
            }
            this.whiteMap.set(blacklist[i], w);
            w++;
        }
    }
    console.log(this.whiteMap)
};

/**
 * @return {number}
 */
Solution.prototype.pick = function () {
    let x = ~~(Math.random(0, 1) * this.bound);
    console.log(x)
    return this.whiteMap.get(x) || x;
};

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(n, blacklist)
 * var param_1 = obj.pick()
 */

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(N, blacklist)
 * var param_1 = obj.pick()
 */
// @lc code=end

