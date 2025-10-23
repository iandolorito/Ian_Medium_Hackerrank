function xorSequence(l, r) {
    function bxor(i) {
        let m = Number(i % 4n);
        if (m === 0) return i;
        else if (m === 1) return 1n;
        else if (m === 2) return i + 1n;
        else return 0n;
    }

    function G(n) {
        if (n < 0n) return 0n;
        let blocks = (n + 1n) / 4n;
        let res = (blocks % 2n === 1n) ? 2n : 0n;
        let start = blocks * 4n;
        for (let i = start; i <= n; i++) res ^= bxor(i);
        return res;
    }

    l = BigInt(l);
    r = BigInt(r);
    let ans = G(r) ^ G(l - 1n);
    return Number(ans);
}
