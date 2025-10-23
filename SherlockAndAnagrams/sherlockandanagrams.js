function sherlockAndAnagrams(s) {
    let map = {};
    let count = 0;
    for (let i = 0; i < s.length; i++) {
        for (let j = i + 1; j <= s.length; j++) {
            let sub = s.substring(i, j).split('').sort().join('');
            if (map[sub]) count += map[sub];
            map[sub] = (map[sub] || 0) + 1;
        }
    }
    return count;
}
