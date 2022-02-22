/*
 * @lc app=leetcode.cn id=733 lang=typescript
 *
 * [733] 图像渲染
 */

// @lc code=start
function floodFill(image: number[][], sr: number, sc: number, newColor: number): number[][] {
    const dx = [1, -1, 0, 0], dy = [0, 0, 1, -1];
    const curColor = image[sr][sc];
    const dfs = (row, col) => {
        if (image[row][col] == curColor) {
            image[row][col] = newColor;
            for (let i = 0; i < 4; i++){
                const x = row + dx[i], y = col + dy[i];
                if (x >= 0 && x < image.length && y >= 0 && y < image[0].length) {
                    dfs(x, y);
                }
            }
        }
    }
    if (curColor !== newColor) {
        dfs(sr, sc);
    }

    return image;
};
// @lc code=end

