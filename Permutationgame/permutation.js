function permutationGame(arr) {
    const memo = new Map();

    function isSorted(a) {
        for (let i = 1; i < a.length; i++) {
            if (a[i] < a[i - 1]) return false;
        }
        return true;
    }

    function canWin(a) {
        const key = a.join(',');
        if (memo.has(key)) return memo.get(key);
        if (isSorted(a)) return false;

        for (let i = 0; i < a.length; i++) {
            const next = a.slice(0, i).concat(a.slice(i + 1));
            if (!canWin(next)) {
                memo.set(key, true);
                return true;
            }
        }
        memo.set(key, false);
        return false;
    }

    return canWin(arr) ? "Alice" : "Bob";
}
