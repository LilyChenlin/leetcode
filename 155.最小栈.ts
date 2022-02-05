/*
 * @lc app=leetcode.cn id=155 lang=typescript
 *
 * [155] 最小栈
 */

// @lc code=start
class MinStack {
    protected Stack: number[] = [];
    protected MinStack: number[] = [];

    push(val: number): void {
        this.Stack.push(val);
        this.MinStack.push(Math.min(val, this.getMin() ?? Infinity))
    }

    pop(): void {
        this.Stack.pop();
        this.MinStack.pop()
    }

    top(): number {
        return this.Stack[this.Stack.length - 1]
    }

    getMin(): number {
        return this.MinStack[this.MinStack.length - 1]
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

