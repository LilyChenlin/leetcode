/*
 * @lc app=leetcode.cn id=133 lang=javascript
 *
 * [133] 克隆图
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {Node} node
 * @return {Node}
 */

 // 递归
// var cloneGraph = function(node) {
//     return clone(node, new Map());
// };
// let clone = (node, map) => {
//     if (!node) return null;
//     let newNode = map.get(node);
//     if (newNode) return newNode;
//     newNode = new Node(node.val);

//     map.set(node, newNode)
//     node.neighbors.forEach((neighbors) => {
//         newNode.neighbors.push(clone(neighbors, map))
//     })

//     return newNode;
// }

// 广度
let cloneGraph = (node) => {
    if (!node) return null;
    let map = new Map();
    let stack = [node];
    let newNode = new Node(node.val, [])
    map.set(node.val, newNode);

    while (stack.length > 0) {
        let _node = stack.pop();
        let _newNode = map.get(_node.val);

        _node.neighbors.forEach((neighbor) => {
            let _newNB = map.get(neighbor.val);
            if (!_newNB) {
                stack.push(neighbor);
                _newNB = new Node(neighbor.val, []);
                map.set(neighbor.val, _newNB);
            }
            _newNode.neighbors.push(_newNB);
        })
    }

    return newNode;
}
// @lc code=end

