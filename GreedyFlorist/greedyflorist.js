function getMinimumCost(k, c) {
    c.sort((a, b) => b - a);
    let total = 0;
    for (let i = 0; i < c.length; i++) {
        total += (Math.floor(i / k) + 1) * c[i];
    }
    return total;
}
