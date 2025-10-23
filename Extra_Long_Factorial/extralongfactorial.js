function extraLongFactorials(n) {
    // Write your code here
    let descnum = [];
    for (let i = n; i >= 1; i--) {
        descnum.push(i);
    }

    let total = 1n;
    for (let nums of descnum) {
        total *= BigInt(nums);
    }

    console.log(total.toString());
}