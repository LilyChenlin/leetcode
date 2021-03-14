/*
 * @lc app=leetcode.cn id=710 lang=javascript
 *
 * [710] 黑名单中的随机数
 */

// @lc code=start
/**
 * @param {number} N
 * @param {number[]} blacklist
 */
var Solution = function(N, blacklist) {
    this.sz = N - blacklist.length;
    // 先讲黑名单中的对象添加到map中
    this.blacklistMap = new Map();
    for (var value of blacklist) {
        this.blacklistMap.set(value, 666);
    }

    var last = N - 1; // 获得最后一个索引
    for(var value of blacklist) {
        if (value >= this.sz) {continue};

        while (this.blacklistMap.has(last)) {
            last--
        }
        this.blacklistMap.set(value, last)
        last--;
    }

};

/**
 * @return {number}
 */
Solution.prototype.pick = function() {
    // var len = N - blacklist.length;
    // 随机获取一个index
    var index = Math.floor(Math.random() * this.sz);
    return this.blacklistMap.has(index) ? this.blacklistMap.get(index) : index;
};

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(N, blacklist)
 * var param_1 = obj.pick()
 */
// @lc code=end

