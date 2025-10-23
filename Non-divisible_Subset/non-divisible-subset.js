function nonDivisibleSubset(k, s) {
    let remainderCounts = new Array(k).fill(0);

    for (let num of s) {
        remainderCounts[num % k]++;
    }

    let result = Math.min(remainderCounts[0], 1);

    for (let i = 1; i <= Math.floor(k / 2); i++) {
        if (i === k - i) {
            result += 1;
        } else {
            result += Math.max(remainderCounts[i], remainderCounts[k - i]);
        }
    }

    return result;
}
