function mostPoints(questions: number[][]): number {
    let len = questions.length;
    let dp = new Array(len).fill(0);
    dp[len - 1] = questions[len - 1][0];
    for (let i = len - 2; i >= 0; i--) {
        dp[i] = Math.max(dp[i + 1], questions[i][0] + (dp[i + questions[i][1] + 1] || 0));
    }
    return dp[0]
};