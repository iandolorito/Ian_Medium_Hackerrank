function surfaceArea(A) {
    let n = A.length;
    let m = A[0].length;
    let area = 0;

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (A[i][j] > 0) {
                area += 2;
                let up = i > 0 ? A[i - 1][j] : 0;
                let down = i < n - 1 ? A[i + 1][j] : 0;
                let left = j > 0 ? A[i][j - 1] : 0;
                let right = j < m - 1 ? A[i][j + 1] : 0;

                area += Math.max(A[i][j] - up, 0);
                area += Math.max(A[i][j] - down, 0);
                area += Math.max(A[i][j] - left, 0);
                area += Math.max(A[i][j] - right, 0);
            }
        }
    }

    return area;
}
