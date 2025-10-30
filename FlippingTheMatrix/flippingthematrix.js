function gamingArray(arr) {
    let max = 0, moves = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
            moves++;
        }
    }
    return moves % 2 === 1 ? "BOB" : "ANDY";
}
