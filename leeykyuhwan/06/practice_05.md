# 문제 유형
Frequency Counter / Multiple Pointers - areThereDuplicates

# 예상 입출력

| 입력 | 출력 |
|---|---|
| 1 2 3, 2.5| true  |
| 1 3 3 5 6 7 10 12 19, 8 | true |
| -1 0 3 4 5 6, 4.1  | false  |
| , 4 | false |

# 문제풀이

```js
const rl = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
});

const input = [];

rl.on("line", (line) => {
  line.split(",").map((el) =>  input.push(el));
}).on("close", () => {
  const [n, m] = input;
  const arr = n.split(" ").map(Number);
  const num = parseFloat(m);
  console.log(averagePair(arr, num));
    
});

const averagePair = (arr, target) => {
  if (arr.length === 0) return false; // 빈 배열 처리

  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
      const avg = (arr[left] + arr[right]) / 2;

      if (avg === target) {
          return true; // 목표 평균과 일치하는 쌍 발견
      } else if (avg < target) {
          left++; // 평균이 작으면 왼쪽 포인터 이동
      } else {
          right--; // 평균이 크면 오른쪽 포인터 이동
      }
  }

  return false; // 쌍을 찾지 못한 경우
}
```

# 시간 복잡도
- O(n)

# 접근 및 풀이방식
1.입력 처리:
입력 문자열을 쉼표로 분리하여 배열과 숫자로 나눕니다.
배열 문자열을 숫자 배열로 변환하고, 숫자 문자열을 부동 소수점 숫자로 변환합니다.
2.두 포인터 사용:
배열의 시작과 끝에서 두 포인터를 설정합니다.
두 포인터가 가리키는 값의 평균을 계산합니다.
평균이 목표 값과 같으면 true를 반환합니다.
평균이 목표 값보다 작으면 왼쪽 포인터를 오른쪽으로 이동합니다.
평균이 목표 값보다 크면 오른쪽 포인터를 왼쪽으로 이동합니다.
3.결과 반환:
두 포인터가 교차할 때까지 목표 평균을 찾지 못하면 false를 반환합니다.