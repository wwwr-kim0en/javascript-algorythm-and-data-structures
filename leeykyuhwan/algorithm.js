const rl = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
});

const input = [];

rl.on("line", (line) => {
    line.split(", ").forEach((el) => {
        input.push(el);
    });
}).on("close", () => {
    const [n, m] = input;

    console.log(isAnagram(n, m));
    
});

const isAnagram = (str1, str2) => {
    if (str1.length !== str2.length) {
        return false;
    }

    let frequencyCount1 = {};
    let frequencyCount2 = {};

    for (let i = 0; i < str1.length; i++) {
        frequencyCount1[str1[i]] = (frequencyCount1[str1[i]] || 0) + 1;
        frequencyCount2[str2[i]] = (frequencyCount2[str2[i]] || 0) + 1;
    }

    for (let key in frequencyCount1) {
        if (frequencyCount1[key] !== frequencyCount2[key]) {
            return false;
        }
    }

    return true;
}