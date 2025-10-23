function highestValuePalindrome(s, n, k) {
    let arr = s.split('');
    let changed = new Array(n).fill(false);
    let l = 0, r = n - 1;

    while (l < r) {
        if (arr[l] !== arr[r]) {
            const bigger = arr[l] > arr[r] ? arr[l] : arr[r];
            arr[l] = arr[r] = bigger;
            changed[l] = changed[r] = true;
            k--;
        }
        l++; r--;
    }

    if (k < 0) return '-1';

    l = 0; r = n - 1;
    while (l <= r && k > 0) {
        if (l === r) {
            if (arr[l] !== '9') {
                arr[l] = '9';
                k--;
            }
        } else if (arr[l] !== '9') {
            if (changed[l] || changed[r]) {
                if (k >= 1) {
                    arr[l] = arr[r] = '9';
                    k--;
                }
            } else {
                if (k >= 2) {
                    arr[l] = arr[r] = '9';
                    k -= 2;
                }
            }
        }
        l++; r--;
    }

    return arr.join('');
}
