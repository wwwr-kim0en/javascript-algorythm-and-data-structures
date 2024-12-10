# 문제 유형
Frequency Counter - validAnagram

# 예상 입출력

| 입력 | 출력 |
| --- | --- |
| '' '' | true |
| 'aaz' 'zza' | false |
| 'anagram' 'nagaram' | true |
| 'rat' 'car' | false |
| 'awesome' 'awesom' | false |
| 'amanaplanacanalpanama' 'acanalmanplanpamana' | false |
| 'qwerty' 'qeywrt' | true |
| 'texttwisttime' 'timetwisttext' | true |


# 문제풀이

```js
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
```

# 시간 복잡도
- O(n)

# 접근 및 풀이방식
길이 비교:
두 문자열의 길이가 다르면 애너그램이 될 수 없으므로 바로 false를 반환합니다.

빈도 수 카운팅:
두 개의 객체(frequencyCount1, frequencyCount2)를 사용하여 각 문자열의 문자를 순회하며 빈도를 기록합니다.

for 루프를 통해 각 문자를 객체에 키로 저장하고, 값으로 빈도를 누적합니다.
빈도 비교:
첫 번째 문자열의 빈도 객체를 순회하며, 두 번째 빈도 객체와 비교합니다.

키 값이 존재하지 않거나, 빈도가 다르면 false를 반환합니다.