function lilysHomework(arr) {
    function countSwaps(a, sorted) {
        let map = new Map();
        for (let i = 0; i < a.length; i++) map.set(a[i], i);
        let swaps = 0;
        for (let i = 0; i < a.length; i++) {
            if (a[i] !== sorted[i]) {
                swaps++;
                let correctValue = sorted[i];
                let toSwapIndex = map.get(correctValue);
                map.set(a[i], toSwapIndex);
                map.set(correctValue, i);
                [a[i], a[toSwapIndex]] = [a[toSwapIndex], a[i]];
            }
        }
        return swaps;
    }

    let asc = [...arr].sort((a, b) => a - b);
    let desc = [...asc].reverse();
    return Math.min(countSwaps([...arr], asc), countSwaps([...arr], desc));
}
