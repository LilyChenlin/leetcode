/*
 * @lc app=leetcode.cn id=690 lang=javascript
 *
 * [690] 员工的重要性
 */

// @lc code=start
/**
 * Definition for Employee.
 * function Employee(id, importance, subordinates) {
 *     this.id = id;
 *     this.importance = importance;
 *     this.subordinates = subordinates;
 * }
 */

/**
 * @param {Employee[]} employees
 * @param {number} id
 * @return {number}
 */
// var GetImportance = function (employees, id) {
//     const map = new Map();
//     for (let item of employees) {
//         map.set(item.id, item);
//     }
//     const dfs = (id) => {
//         const employ = map.get(id);
//         let subordinates = employ.subordinates;
//         let total = employ.importance;

//         for (let i = 0; i < subordinates.length; i++) {
//             total += dfs(subordinates[i])
//         }
//         return total;
//     }
//     return dfs(id);
// };

var GetImportance = function (employees, id) {
    const map = new Map();
    for (let item of employees) {
        map.set(item.id, item);
    }

    const stack = [];
    let res = 0;
    stack.push(id);
    while (stack.length > 0) {
        const employId = stack.shift();
        let employ = map.get(employId);
        res += employ.importance;
        let subordinates = employ.subordinates;
        stack.push(...subordinates)
    }
    return res;
}
// @lc code=end

