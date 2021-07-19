/*
 * @lc app=leetcode.cn id=599 lang=javascript
 *
 * [599] 两个列表的最小索引总和
 */

// @lc code=start
/**
 * @param {string[]} list1
 * @param {string[]} list2
 * @return {string[]}
 */
var findRestaurant = function(list1, list2) {
    let mapList1 = new Map();
    let res = [];
    let minVal = Infinity;
    for (let i = 0; i < list1.length; i++) {
        mapList1.set(list1[i], i)
    }
    for (let j = 0; j < list2.length; j++) {
        if (mapList1.has(list2[j])) {
            let idx = mapList1.get(list2[j]) + j;
            if (minVal > idx) {
                res = [list2[j]]
                minVal = idx;
            } else if (minVal == idx) {
                res.push(list2[j])
            }
        }
    }
    return res;
};
// @lc code=end

