function gridSearch(G, P) {
    let R = G.length;
    let C = G[0].length;
    let r = P.length;
    let c = P[0].length;

    for (let i = 0; i <= R - r; i++) {
        for (let j = 0; j <= C - c; j++) {
            if (G[i].substr(j, c) === P[0]) {
                let found = true;
                for (let k = 1; k < r; k++) {
                    if (G[i + k].substr(j, c) !== P[k]) {
                        found = false;
                        break;
                    }
                }
                if (found) return "YES";
            }
        }
    }

    return "NO";
}
