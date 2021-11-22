/*
 * @lc app=leetcode.cn id=457 lang=javascript
 *
 * [457] 环形数组是否存在循环
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var circularArrayLoop = function(nums) {
    let n = nums.length;
    for (let i = 0; i < n; i++) {
        if (checked(i, n , nums)) return true;
    }
    return false;
};
var checked = (start, n, nums) => {
    let cur = start;
    let flag = nums[cur] > 0;
    // 标记遍历过的数量
    let k = 1;
    while (true) {
        const next = ((cur + nums[cur]) % n + n) % n;
        if (k > n) return false;
        if (flag && nums[next] < 0) return false;
        if (!flag && nums[next] > 0) return false;
        if (next == start) return k > 1;
        cur = next;
        k++;
    }
}

/**
 * 解法二
 */
var circularArrayLoop = function (nums) {
    let n = nums.length;
    let vis = new Array(nums.length).fill(0);
    for (let start = 0, idx = 1; start < n; start++, idx++) {
        // 如果已这个为起点的被标记过
        if (vis[start] !== 0) continue;
        let cur = start;
        let flag = nums[cur] > 0;
        while (true) {
            let next = ((cur + nums[cur]) % n + n) % n;
            if (cur == next) break;
            if (vis[next] !== 0) {// 说明被标记过
                if (vis[next] !== idx) break;
                else return true;
            }
            if (flag && nums[next] < 0) break;
            if (!flag && nums[next] > 0) break;
            vis[next] = idx;
            cur = next;
        }
    }
    return false
}
// @lc code=end

