function almostSorted(arr) {
    let sorted = [...arr].sort((a, b) => a - b);
    let diff = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== sorted[i]) {
            diff.push(i);
        }
    }

    if (diff.length === 0) {
        console.log("yes");
    } else if (diff.length === 2) {
        console.log("yes");
        console.log("swap", diff[0] + 1, diff[1] + 1);
    } else {
        let start = diff[0];
        let end = diff[diff.length - 1];
        let reversed = arr.slice(start, end + 1).reverse();
        let newArr = arr.slice(0, start).concat(reversed, arr.slice(end + 1));

        if (newArr.join(' ') === sorted.join(' ')) {
            console.log("yes");
            console.log("reverse", start + 1, end + 1);
        } else {
            console.log("no");
        }
    }
}
