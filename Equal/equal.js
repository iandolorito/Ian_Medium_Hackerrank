function equal(arr) {
    let minVal = Math.min(...arr);
    let result = Infinity;

    for (let base = 0; base < 5; base++) {
        let moves = 0;
        for (let i = 0; i < arr.length; i++) {
            let diff = arr[i] - (minVal - base);
            moves += Math.floor(diff / 5) + Math.floor((diff % 5) / 2) + (diff % 5) % 2;
        }
        if (moves < result) result = moves;
    }

    return result;
}
