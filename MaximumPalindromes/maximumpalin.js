const MOD = 1000000007n;
let freq = [];
let fact = [1n];
let invFact = [1n];

function modPow(a, b) {
    let res = 1n;
    a %= MOD;
    while (b > 0) {
        if (b % 2n) res = (res * a) % MOD;
        a = (a * a) % MOD;
        b >>= 1n;
    }
    return res;
}

function modInverse(a) {
    return modPow(a, MOD - 2n);
}

function initialize(s) {
    const n = s.length;
    freq = Array.from({ length: n + 1 }, () => Array(26).fill(0n));
    for (let i = 1; i <= n; i++) {
        for (let j = 0; j < 26; j++) freq[i][j] = freq[i - 1][j];
        freq[i][s.charCodeAt(i - 1) - 97]++;
    }
    for (let i = 1; i <= n; i++) {
        fact[i] = (fact[i - 1] * BigInt(i)) % MOD;
        invFact[i] = modInverse(fact[i]);
    }
}

function answerQuery(l, r) {
    let count = Array(26).fill(0n);
    for (let i = 0; i < 26; i++) count[i] = freq[r][i] - freq[l - 1][i];
    let half = 0n, odd = 0n;
    for (let c of count) {
        half += c / 2n;
        if (c % 2n) odd++;
    }
    let res = fact[Number(half)];
    for (let c of count) res = (res * invFact[Number(c / 2n)]) % MOD;
    if (odd > 0n) res = (res * odd) % MOD;
    return Number(res);
}
