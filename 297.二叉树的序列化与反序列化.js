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
var serialize = function(root) {
    let result = [];
    helper(root, result);
    return JSON.stringify(result);
};

var helper = (root, result) => {
    // 前序遍历序列化
    // if (root == null) return result.push('#');
    // result.push(root.val);
    // helper(root.left, result);
    // helper(root.right, result);

    //后序遍历
    if (root == null) return result.push('#');
    helper(root.left, result);
    helper(root.right, result);
    result.push(root.val);
}   

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {

    data = JSON.parse(data);
    return helperD(data)
    
    

};
var helperD = (data) => {

    // 前序遍历反序列化
    // const val = data.shift(); 
    // if (val === '#') return null;
    // const node = new TreeNode(val);
    // node.left = helperD(data);
    // node.right = helperD(data)
    // return node;

    // 后序遍历 后序遍历是左右中的顺序，所以先找到根节点应在数组中pop最后一个数字 
    const val  = data.pop();
    if (val === '#') return null;
    const node = new TreeNode(val);
    node.right = helperD(data);
    node.left = helperD(data);
    return node


}   
/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */
// @lc code=end

