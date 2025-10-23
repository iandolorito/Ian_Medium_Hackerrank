function unboundedKnapsack(k, arr) {
    const dp = Array(k + 1).fill(0);
    arr = [...new Set(arr)];
    for (let i = 0; i < arr.length; i++) {
        for (let w = arr[i]; w <= k; w++) {
            dp[w] = Math.max(dp[w], dp[w - arr[i]] + arr[i]);
        }
    }
    return dp[k];
}