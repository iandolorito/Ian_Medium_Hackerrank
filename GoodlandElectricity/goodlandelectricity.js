function pylons(k, arr) {
    let i = 0, n = arr.length, count = 0;
    while (i < n) {
        let loc = Math.min(i + k - 1, n - 1);
        while (loc >= i - k + 1 && loc >= 0 && arr[loc] === 0) loc--;
        if (loc < i - k + 1 || loc < 0) return -1;
        count++;
        i = loc + k;
    }
    return count;
}
