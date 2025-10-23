function twoPluses(grid) {
    const n = grid.length;
    const m = grid[0].length;
    const pluses = [];

    function sizeOfPlus(i, j) {
        let size = 0;
        while (
            i - size >= 0 &&
            i + size < n &&
            j - size >= 0 &&
            j + size < m &&
            grid[i - size][j] === 'G' &&
            grid[i + size][j] === 'G' &&
            grid[i][j - size] === 'G' &&
            grid[i][j + size] === 'G'
        ) {
            size++;
        }
        return size - 1;
    }

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (grid[i][j] === 'G') {
                let maxSize = sizeOfPlus(i, j);
                for (let s = 0; s <= maxSize; s++) {
                    let cells = new Set();
                    cells.add(i + ',' + j);
                    for (let k = 1; k <= s; k++) {
                        cells.add((i + k) + ',' + j);
                        cells.add((i - k) + ',' + j);
                        cells.add(i + ',' + (j + k));
                        cells.add(i + ',' + (j - k));
                    }
                    pluses.push(cells);
                }
            }
        }
    }

    let maxProduct = 0;
    for (let a = 0; a < pluses.length; a++) {
        for (let b = a + 1; b < pluses.length; b++) {
            let overlap = false;
            for (let cell of pluses[a]) {
                if (pluses[b].has(cell)) {
                    overlap = true;
                    break;
                }
            }
            if (!overlap) {
                let areaA = pluses[a].size;
                let areaB = pluses[b].size;
                maxProduct = Math.max(maxProduct, areaA * areaB);
            }
        }
    }

    return maxProduct;
}
