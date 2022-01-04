/*
 * @lc app=leetcode.cn id=684 lang=javascript
 *
 * [684] 冗余连接
 */

// @lc code=start
/**
 * @param {number[][]} edges
 * @return {number[]}
 */
var findRedundantConnection = function (edges) {
    const n = edges.length;

    // 初始化容器
    const vector = new Array(n + 1).fill(0).map((item, index) => index);
    for (let i = 0; i < n; i++) {
        const item = edges[i];
        let value1 = findParent(item[0], vector),
            value2 = findParent(item[1], vector);
        if (value1 === value2) {
            return item;
        } else {
            vector[value1] = value2;
        }
    }
    return [0]
};

let findParent = (value, arr) => {
    let num = value;
    while (arr[num] !== num) {
        num = arr[num]
    }
    return num;
}
// @lc code=end

