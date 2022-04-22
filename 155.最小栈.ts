/*
 * @lc app=leetcode.cn id=155 lang=typescript
 *
 * [155] 最小栈
 */

// @lc code=start
class myNode {
    val: number;
    min: number;
    next: myNode;
    constructor(val: number, min: number, node: myNode) {
        this.val = val;
        this.min = min;
        this.next = node;
    }
}

class MinStack {
    head: myNode;
    constructor(head: myNode) {
        this.head = head;
    }

    push(val: number): void {
        if (this.head == null) {
            this.head = new myNode(val, val, null);
        } else {
            this.head = new myNode(val, Math.min(val, this.head.min), this.head);
        }
    }

    pop(): void {
        this.head = this.head.next;
    }

    top(): number {
        return this.head.val;
    }

    getMin(): number {
        return this.head.min;
    }
}


/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
// @lc code=end

