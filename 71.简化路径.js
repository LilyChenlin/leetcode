/*
 * @lc app=leetcode.cn id=71 lang=javascript
 *
 * [71] 简化路径
 */

// @lc code=start
/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {
    // 取出目录名->英文字母
    let engList = [];
    let temp = "";
    let numDian = 0;
    for (let i = 0; i < path.length; i++) {
        if (path[i] !== '/' && path[i] !== '.') {
            if (numDian > 0) {
                temp = temp + '.'.repeat(numDian)
                numDian = 0
            }
            // 英文字母
            temp = temp + path[i];
        } else if (path[i] == '.') {
            numDian++;

        } else {// path[i] == '/'
            let copy = '';
            if (temp !== '' && numDian !== 0) {
                copy = temp + '.'.repeat(numDian);
                engList.push(copy);
                numDian = 0;
            } 
            if (numDian ==  2) {
                engList.pop();
            } else if (numDian > 2) {
                engList.push('.'.repeat(numDian));
            }
            if (temp !== '' && numDian == 0 && copy == '') {
                engList.push(temp);
            }
            numDian = 0;
            temp = '';
            copy = ''
        }
    }
    if (temp) engList.push(temp);
    let res = '/';
    if (engList.length == 0 && numDian == 0) {
        return res;
    }
    if (numDian == 2) {
        engList.pop();
    } else if (numDian > 2) {
        engList.push('.'.repeat(numDian))
    }
    for (let i = 0; i < engList.length; i++) {
        res = res + engList[i] + (i == engList.length - 1 ? '' : '/');
    }

    return res;
};

var simplifyPath = function(path) { 
    const dir = path.split('/'), stack = []
    for (const i of dir) {
        if (i === '.' || i === '') continue
        if (i === '..') {
            stack.length > 0 ? stack.pop() : null
            continue
        }
        stack.push(i)
    }
    return '/' + stack.join('/')
}
// @lc code=end

