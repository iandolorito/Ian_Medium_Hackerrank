function queensAttack(n, k, r_q, c_q, obstacles) {
    const directions = [
        [1, 0], [-1, 0], [0, 1], [0, -1],
        [1, 1], [1, -1], [-1, 1], [-1, -1]
    ];

    const obs = new Set(obstacles.map(o => o[0] + ',' + o[1]));
    let count = 0;

    for (const [dr, dc] of directions) {
        let r = r_q + dr;
        let c = c_q + dc;
        while (r >= 1 && r <= n && c >= 1 && c <= n && !obs.has(r + ',' + c)) {
            count++;
            r += dr;
            c += dc;
        }
    }

    return count;
}
