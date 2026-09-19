function longestCommonPrefix(strs) {
    let result = ""

    const max = Math.max(...strs.map(s => s.length))
    const s = strs.find(st => st.length == max)

    for (let i = 0; i < max; i++) {
        if (strs.every(st => st[i] == s[i])) {
            result += s[i]
        } else {
            break;
        }
    }

    return result
};