function isValid(s) {
    const freq = {};
    for (let ch of s) freq[ch] = (freq[ch] || 0) + 1;
    const counts = Object.values(freq);
    const map = {};
    for (let c of counts) map[c] = (map[c] || 0) + 1;

    const keys = Object.keys(map).map(Number);
    if (keys.length === 1) return "YES";
    if (keys.length > 2) return "NO";

    const [a, b] = keys.sort((x, y) => x - y);
    if (a === 1 && map[a] === 1) return "YES";
    if (b - a === 1 && map[b] === 1) return "YES";
    return "NO";
}
