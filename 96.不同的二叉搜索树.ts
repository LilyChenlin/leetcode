/*
 * @lc app=leetcode.cn id=96 lang=typescript
 *
 * [96] 不同的二叉搜索树
 */

// @lc code=start
function numTrees(n: number): number {
    let map = new Map();
    let loop = (n:number):number => {
        if(n === 0 || n === 1) return 1;

        if (map.has(n)) {
            return map.get(n);
        }
        let count = 0;
        for (let i = 1; i <= n; i++) {
            let leftNum = loop(i - 1);
            let rightNum = loop(n - i);

            count += rightNum * leftNum;

        }
        map.set(n, count);
        return count;
    }
    let count = loop(n);
    return count;

};
// @lc code=end

