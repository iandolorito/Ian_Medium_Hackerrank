function substrings(n) {
    const MOD = 1000000007;
    const str = n.toString();
    const len = str.length;
    let total = 0;
    let multiplier = 1;
    let sumOfDigits = 0;

    // Traverse from rightmost digit to leftmost
    for (let i = len - 1; i >= 0; i--) {
        const digit = Number(str[i]);
        sumOfDigits = (sumOfDigits + digit * multiplier * (i + 1)) % MOD;
        multiplier = (multiplier * 10 + 1) % MOD;
    }

    return sumOfDigits;
}
