# 문제
Sliding Window - maxSubarraySum

# 예상 입출력

| 입력 | 출력 |
|---|---|
| 100 200 300 400, 2 | 700 |
| 1 4 2 10 23 3 1 0 20, 4 | 39 |
| -3 4 0 -2 6 -1, 2 | 5 |
| 3 -2 7 -4 1 -1 4 -2 1, 2 | 5 |
| 2 3, 3 | null |

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
  const arr = n.split(" ").map((el) => parseInt(el));
  const num = parseInt(m);
  
  console.log(maxSubarraySum(arr, num));
    
});

function maxSubarraySum(arr, num) {
  if (arr.length < num) return null;

  let maxSum = 0;
  let tempSum = 0;

  // 첫 번째 부분 배열의 합 계산
  for (let i = 0; i < num; i++) {
      maxSum += arr[i];
  }

  tempSum = maxSum;

  // 슬라이딩 윈도우 기법 사용
  for (let i = num; i < arr.length; i++) {
      tempSum = tempSum - arr[i - num] + arr[i];
      maxSum = Math.max(maxSum, tempSum);
  }

  return maxSum;
}
```

# 시간 복잡도
- O(N)

# 접근 및 풀이방식
1. 배열의 길이가 주어진 숫자보다 작으면 null을 반환합니다.
2. 첫 번째 부분 배열의 합을 계산합니다.
3. 배열을 순회하면서 슬라이딩 윈도우 기법을 사용하여 최대 부분 배열의 합을 갱신합니다.
4. 최대 부분 배열의 합을 반환합니다.