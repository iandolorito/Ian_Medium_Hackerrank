function encryption(s) {
    s = s.replace(/\s/g, '');
    let len = s.length;
    let row = Math.floor(Math.sqrt(len));
    let col = Math.ceil(Math.sqrt(len));
    if (row * col < len) row++;

    let result = [];

    for (let i = 0; i < col; i++) {
        let str = '';
        for (let j = i; j < len; j += col) {
            str += s[j];
        }
        result.push(str);
    }

    return result.join(' ');
}
