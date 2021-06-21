/*
 * @lc app=leetcode.cn id=430 lang=javascript
 *
 * [430] 扁平化多级双向链表
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val,prev,next,child) {
 *    this.val = val;
 *    this.prev = prev;
 *    this.next = next;
 *    this.child = child;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var flatten = function(head) {
    if (head == null) return head;
    let dummyHead = new Node(0, null, head, null);
    flattenDFs(dummyHead, head);
    dummyHead.next.prev = null;
    return dummyHead.next;
};

var flattenDFs = (prev, cur) => {
    if (cur == null) return prev;
    cur.prev = prev;
    prev.next = cur;

    let tempNext = cur.next;
    // 先序遍历
    let tail = flattenDFs(cur, cur.child);
    cur.child = null;
    return flattenDFs(tail, tempNext)
}
// @lc code=end

