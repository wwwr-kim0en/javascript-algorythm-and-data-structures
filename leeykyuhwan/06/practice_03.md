# 문제 유형
Multiple Pointers - countUniqueValues

# 예상 입출력

| 입력 | 출력 |
|---|---|
| `182,281` | `true`  |
| `34,14` | `false` |
| `3589578,5879385`  | `true`  |
| `22,222` | `false` |


# 문제풀이

```js
const rl = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
});

const input = [];

rl.on("line", (line) => {
    line.split(",").map((el) => input.push(parseInt(el)));
}).on("close", () => {
  const [n, m ] = input;
  console.log(sameFrequency(n, m));
    
});

function sameFrequency(num1, num2) {
  // 숫자를 문자열로 변환
  const str1 = num1.toString();
  const str2 = num2.toString();

  // 길이가 다르면 빈도가 같을 수 없음
  if (str1.length !== str2.length) return false;

  const frequencyCount = {};

  // 첫 번째 숫자의 자릿수를 카운팅
  for (let char of str1) {
      frequencyCount[char] = (frequencyCount[char] || 0) + 1;
  }

  // 두 번째 숫자의 자릿수를 비교하며 카운팅 감소
  for (let char of str2) {
      if (!frequencyCount[char]) return false; // 빈도 불일치 시 false
      frequencyCount[char]--;
  }

  return true;
}
```

# 시간 복잡도
- O(n)

# 접근 및 풀이방식
1. 숫자 변환 및 길이 비교:
두 숫자를 문자열로 변환하여 자릿수를 쉽게 비교합니다. 길이가 다르면 즉시 false를 반환합니다.

2. 빈도 카운팅:
- 첫 번째 숫자의 각 자릿수를 카운트하여 객체에 저장합니다.
- 두 번째 숫자의 각 자릿수를 순회하면서, 해당 자릿수의 카운트를 감소시킵니다.
- 카운트가 0보다 작아지거나 없으면 false를 반환합니다.
3. 결과 반환:
모든 자릿수의 빈도가 일치하면 true를 반환합니다.