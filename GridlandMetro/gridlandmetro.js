function gridlandMetro(n, m, k, track) {
    let map = new Map();

    for (let [r, c1, c2] of track) {
        if (!map.has(r)) map.set(r, []);
        map.get(r).push([c1, c2]);
    }

    let totalTracks = 0;

    for (let [r, ranges] of map.entries()) {
        ranges.sort((a, b) => a[0] - b[0]);
        let [start, end] = ranges[0];

        for (let i = 1; i < ranges.length; i++) {
            let [s, e] = ranges[i];
            if (s <= end) {
                end = Math.max(end, e);
            } else {
                totalTracks += end - start + 1;
                start = s;
                end = e;
            }
        }
        totalTracks += end - start + 1;
    }

    return BigInt(n) * BigInt(m) - BigInt(totalTracks);
}
