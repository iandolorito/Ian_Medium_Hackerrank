function legoBlocks(n, m) {
    const MOD = 1000000007n;
    const rowWays = Array(m + 1).fill(0n);
    rowWays[0] = 1n;
    for (let i = 1; i <= m; i++) {
        rowWays[i] = (
            (rowWays[i - 1] || 0n) +
            (i >= 2 ? rowWays[i - 2] : 0n) +
            (i >= 3 ? rowWays[i - 3] : 0n) +
            (i >= 4 ? rowWays[i - 4] : 0n)
        ) % MOD;
    }
    const total = Array(m + 1).fill(0n);
    for (let i = 1; i <= m; i++) {
        total[i] = rowWays[i] ** BigInt(n) % MOD;
    }
    const stable = Array(m + 1).fill(0n);
    stable[0] = 1n;
    for (let i = 1; i <= m; i++) {
        let unstable = 0n;
        for (let j = 1; j < i; j++) {
            unstable = (unstable + stable[j] * total[i - j]) % MOD;
        }
        stable[i] = (total[i] - unstable + MOD) % MOD;
    }
    return Number(stable[m]);
}
