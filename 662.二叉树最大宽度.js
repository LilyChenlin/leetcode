/*
 * @lc app=leetcode.cn id=662 lang=javascript
 *
 * [662] 二叉树最大宽度
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var widthOfBinaryTree = function (root) {
    if (root == null) return;
    let queue = [];
    // queue [node, depth, rightPosition]
    queue.push([root, 0, 0]);
    let left = 0, curDepth = 0, ans = 0;
    while (queue.length > 0) {
        let item = queue.shift();
        let node = item[0], itemDepth = item[1], itemPos = item[2];
        if (node) {
            console.log("node", node)
            queue.push([node.left, itemDepth + 1, itemPos * 2])
            queue.push([node.right, itemDepth + 1, itemPos * 2 + 1])
            if (curDepth !== itemDepth) {
                curDepth = itemDepth;
                left = itemPos;
            }
            ans = Math.max(ans, itemPos - left + 1);
        }
    }
    return ans;
};

// /**
//  * @param {*} node 节点
//  * @param {*} depth 深度
//  * @param {*} rightPosition 最右位置
//  */
// let AnnotatedNode = (node, depth, rightPosition) => {
//     return new
// }
// @lc code=end

