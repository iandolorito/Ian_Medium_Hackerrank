function countSort(arr) {
    const n = arr.length;
    const buckets = Array.from({ length: 100 }, () => []);
    for (let i = 0; i < n; i++) {
        const [num, str] = arr[i];
        const index = parseInt(num);
        if (i < n / 2) {
            buckets[index].push("-");
        } else {
            buckets[index].push(str);
        }
    }
    console.log(buckets.flat().join(" "));
}