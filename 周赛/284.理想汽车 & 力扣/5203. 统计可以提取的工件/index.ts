function digArtifacts(n: number, artifacts: number[][], dig: number[][]): number {
    let arr = new Array(n * n).fill(false);
    for (let i = 0; i < dig.length; i++) {
        let idx = dig[i][0] * n + dig[i][1];
        arr[idx] = true;
    }

    let ans = 0;
    for (let i = 0; i < artifacts.length; i++) {
        let flag = true;
        for (let row = artifacts[i][0]; row <= artifacts[i][2] && flag; row++) {
            for (let col = artifacts[i][1]; col <= artifacts[i][3] && flag; col++) {
                const idx = row * n + col;
                flag = arr[idx];
            }
        }
        if (flag) ans++;
    }
    return ans;
};