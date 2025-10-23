function countArray(n, k, x) {
    const mod = 1000000007;
    let a = 1;
    let b = 0;

    for (let i = 2; i <= n; i++) {
        let newA = b * (k - 1) % mod;
        let newB = (a + b * (k - 2)) % mod;
        a = newA;
        b = newB;
    }

    return x === 1 ? a : b;
}
