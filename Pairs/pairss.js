function pairs(k, arr) {
    let count = 0;
    let set = new Set(arr);

    for (let num of arr) {
        if (set.has(num + k)) {
            count++;
        }
    }

    return count;
}
