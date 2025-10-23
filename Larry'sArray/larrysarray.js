function larrysArray(A) {
    let count = 0;

    for (let i = 0; i < A.length; i++) {
        for (let j = i + 1; j < A.length; j++) {
            if (A[i] > A[j]) {
                count++;
            }
        }
    }

    if (count % 2 === 0) {
        return "YES";
    } else {
        return "NO";
    }
}
