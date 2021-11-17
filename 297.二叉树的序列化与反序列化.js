/*
 * @lc app=leetcode.cn id=297 lang=javascript
 *
 * [297] 二叉树的序列化与反序列化
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */


function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}
/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
const serialize = (root) => {
    if (root == null) {                  
        return 'X';
    }
    const left = serialize(root.left);
    const right = serialize(root.right);
    return root.val + ',' + left + ',' + right;
};  

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
const deserialize = (data) => {
    const list = data.split(',');

    const buildTree = (list) => {
        const rootVal = list.shift();
        if (rootVal == "X") {
            return null;
        }
        const root = new TreeNode(rootVal); 
        root.left = buildTree(list);        
        root.right = buildTree(list);
        return root;
    };

    return buildTree(list);
};

// @lc code=end

