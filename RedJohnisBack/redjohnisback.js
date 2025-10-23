function redJohn(n) {
    function countWays(n) {
        const dp = Array(n + 1).fill(0);
        dp[0] = 1;
        for (let i = 1; i <= n; i++) {
            dp[i] = dp[i - 1];
            if (i >= 4) dp[i] += dp[i - 4];
        }
        return dp[n];
    }

    function isPrime(num) {
        if (num < 2) return false;
        for (let i = 2; i * i <= num; i++) {
            if (num % i === 0) return false;
        }
        return true;
    }

    const ways = countWays(n);
    let primeCount = 0;
    for (let i = 2; i <= ways; i++) {
        if (isPrime(i)) primeCount++;
    }
    return primeCount;
}
