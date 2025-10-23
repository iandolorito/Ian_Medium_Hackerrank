function hackerlandRadioTransmitters(x, k) {
    x.sort((a, b) => a - b);
    let i = 0;
    let n = x.length;
    let ans = 0;
    while (i < n) {
        let loc = x[i] + k;
        while (i < n && x[i] <= loc) i++;
        let place = x[i - 1];
        loc = place + k;
        while (i < n && x[i] <= loc) i++;
        ans++;
    }
    return ans;
}
