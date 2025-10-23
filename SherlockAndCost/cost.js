function cost(B) {
    let n = B.length;
    let low = 0;
    let high = 0;

    for (let i = 1; i < n; i++) {
        let lowNext = Math.max(low, high + Math.abs(B[i - 1] - 1));
        let highNext = Math.max(low + Math.abs(B[i] - 1), high + Math.abs(B[i] - B[i - 1]));
        low = lowNext;
        high = highNext;
    }

    return Math.max(low, high);
}
