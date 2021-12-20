/*
 * @lc app=leetcode.cn id=488 lang=javascript
 *
 * [488] 祖玛游戏
 */

// @lc code=start
/**
 * @param {string} board
 * @param {string} hand
 * @return {number}
 */
var findMinStep = function (board, hand) {
    hand = Array.from(hand).sort().join('');

    // 初始化用队列维护的状态队列：其中的三个元素分别为桌面球状态、手中球状态和回合数
    const queue = [];
    queue.push([board, hand, 0]);

    // 初始化用哈希集合维护的已访问过的状态
    const visited = new Set();
    visited.add(board + "#" + hand);

    while (queue.length) {
        const [curBoard, curHand, step] = queue.shift();
        for (let i = 0; i <= curBoard.length; ++i) {
            for (let j = 0; j < curHand.length; ++j) {
                // 第 1 个剪枝条件: 当前球的颜色和上一个球的颜色相同
                if (j > 0 && curHand[j] === curHand[j - 1]) {
                    continue;
                }

                // 第 2 个剪枝条件: 只在连续相同颜色的球的开头位置插入新球
                if (i > 0 && curBoard[i - 1] === curHand[j]) {
                    continue;
                }

                // 第 3 个剪枝条件: 只在以下两种情况放置新球
                let choose = false;
                //  - 第 1 种情况 : 当前球颜色与后面的球的颜色相同
                if (i < curBoard.length && curBoard[i] === curHand[j]) {
                    choose = true;
                }
                //  - 第 2 种情况 : 当前后颜色相同且与当前颜色不同时候放置球
                if (i > 0 && i < curBoard.length && curBoard[i - 1] === curBoard[i] && curBoard[i - 1] !== curHand[j]) {
                    choose = true;
                }


                if (choose) {
                    const newBoard = clean(curBoard.substring(0, i) + curHand[j] + curBoard.substring(i));
                    const newHand = curHand.substring(0, j) + curHand.substring(j + 1);
                    if (newBoard.length === 0) {
                        return step + 1;
                    }
                    const str = newBoard + "#" + newHand;
                    if (visited.add(str)) {
                        queue.push([newBoard, newHand, step + 1]);
                    }
                }
            }
        }
    }
    return -1;
};

const clean = (s) => {
    let prev = "";
    while (s !== prev) {
        let sb = [];
        let consecutive = 1;
        for (let i = 0; i < s.length; ++i) {
            const c = s[i];
            if (i > 0) {
                if (c === s[i - 1]) {
                    ++consecutive;
                } else {
                    if (consecutive >= 3) {
                        sb = sb.slice(0, sb.length - consecutive);
                    }
                    consecutive = 1;
                }
            }
            sb.push(c);
        }
        if (consecutive >= 3) {
            sb = sb.slice(0, sb.length - consecutive);
        }
        prev = s;
        s = sb.join('');
    }
    return s;
}

// @lc code=end

