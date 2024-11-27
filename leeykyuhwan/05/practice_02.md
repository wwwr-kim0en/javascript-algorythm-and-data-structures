# 문제 유형
Multiple Pointers - countUniqueValues

# 예상 입출력

| 입력 | 출력 |
| --- | --- |
| `1,1,1,1,1,2` | `2` |
| `1,2,3,4,4,4,7,7,12,12,13` | `7` |
| `` | `0` |
| `-2,-1,-1,0,1` | `4` |


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
    console.log(countUniqueValues(input));
    
});

function countUniqueValues(arr) {
  if (arr.length === 0) return 0; // 빈 배열 처리

  let i = 0; // 첫 번째 포인터

  for (let j = 1; j < arr.length; j++) {
      if (arr[i] !== arr[j]) {
          i++; // 고유 값 발견 시 포인터 이동
          arr[i] = arr[j]; // 새로운 고유 값을 저장
      }
  }

  return i + 1; // 고유 값의 개수는 포인터 i의 위치 + 1
}

```

# 시간 복잡도
- O(n)

# 접근 및 풀이방식
빈 배열 처리: 배열이 비어 있으면 즉시 0을 반환합니다.
투 포인터 사용:
첫 번째 포인터 i는 고유 값을 기록합니다.
두 번째 포인터 j는 배열을 순회하며, 고유 값을 발견할 때마다 i를 증가시키고 값을 업데이트합니다.
결과 반환: 포인터 i의 위치에 1을 더한 값이 고유 값의 개수입니