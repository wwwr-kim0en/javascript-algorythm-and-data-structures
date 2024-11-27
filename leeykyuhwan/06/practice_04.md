# 문제 유형
Frequency Counter / Multiple Pointers - areThereDuplicates

# 예상 입출력

| 입력 | 출력 |
|---|---|
| `1, 2, 3` | false  |
| `1, 2, 3` | `true` |
| `a, b, c, a`  | `true`  |


# 문제풀이

```js
const rl = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
});

const input = [];

rl.on("line", (line) => {
  line.split(",").map((el) => input.push(el.trim()));
}).on("close", () => {
  console.log(areThereDuplicates(...input));
    
});

function areThereDuplicates(...args) {
  // 정렬 (O(n log n))
  args.sort();

  let i = 0;
  for (let j = 1; j < args.length; j++) {
      if (args[i] === args[j]) {
          return true; // 중복 발견
      }
      i++;
  }

  return false; // 중복 없음
}

```

# 시간 복잡도
- O(n log n) : 정렬

# 접근 및 풀이방식
1. 입력 정렬:
가변 인자를 정렬하여 중복된 값이 인접하도록 만듭니다.
2. 두 포인터 비교:
하나의 포인터(i)는 고정된 값, 다른 포인터(j)는 다음 값을 비교합니다.
두 포인터가 가리키는 값이 동일하면 중복이 존재하므로 true를 반환합니다.
3. 결과 반환:
배열을 끝까지 순회해도 중복이 발견되지 않으면 false를 반환합니다.