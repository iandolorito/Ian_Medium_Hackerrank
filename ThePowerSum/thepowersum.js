function powerSum(X, N) {
    function countWays(remaining, power, base) {
        let val = Math.pow(base, power);
        if (val === remaining) return 1;
        if (val > remaining) return 0;
        return countWays(remaining - val, power, base + 1) +
               countWays(remaining, power, base + 1);
    }
    return countWays(X, N, 1);
}
