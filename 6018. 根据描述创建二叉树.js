/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[][]} descriptions
 * @return {TreeNode}
 */
var createBinaryTree = function (descriptions) {
    let nodes = new Map();
    let inMap = new Map(); // 记入每个节点的入度

    for (let i = 0; i < descriptions.length; i++) {
        let parent = descriptions[i][0], child = descriptions[i][1], flag = descriptions[i][2];
        if (!(nodes.has(parent))) {
            let node = new TreeNode(parent);
            nodes.set(parent, node)
        }
        if (!(nodes.has(child))) {
            let node = new TreeNode(child);
            nodes.set(child, node)
        }

        if (flag == 1) {
            nodes.get(parent).left = nodes.get(child)
        } else {
            nodes.get(parent).right = nodes.get(child)
        }
        inMap.set(child, true);
    }
    for (let [key, node] of nodes.entries()) {
        if (!(inMap.get(key))) {
            return node
        }
    }
    return null
};