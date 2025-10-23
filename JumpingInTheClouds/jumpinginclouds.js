function jumpingOnClouds(c, k) {
    let energy = 100;
    let i = 0;

    do {
        i = (i + k) % c.length;
        energy -= c[i] === 1 ? 3 : 1;
    } while (i !== 0);

    return energy;
}
