function bomberMan(n, grid) {
    if (n === 1) return grid;
    if (n % 2 === 0) return Array(grid.length).fill('O'.repeat(grid[0].length));

    function explode(g) {
        let r = g.length, c = g[0].length;
        let newGrid = Array.from({ length: r }, () => Array(c).fill('O'));

        for (let i = 0; i < r; i++) {
            for (let j = 0; j < c; j++) {
                if (g[i][j] === 'O') {
                    newGrid[i][j] = '.';
                    if (i > 0) newGrid[i - 1][j] = '.';
                    if (i < r - 1) newGrid[i + 1][j] = '.';
                    if (j > 0) newGrid[i][j - 1] = '.';
                    if (j < c - 1) newGrid[i][j + 1] = '.';
                }
            }
        }

        return newGrid.map(row => row.join(''));
    }

    let afterFirst = explode(grid);
    let afterSecond = explode(afterFirst);

    if ((n - 3) % 4 === 0) return afterFirst;
    return afterSecond;
}
