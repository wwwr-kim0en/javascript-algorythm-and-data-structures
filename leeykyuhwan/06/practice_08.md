# 문제
Sliding Window - minSubArrayLen

# 예상 입출력

| 입력 | 출력 |
|---|---|
| [2,3,1,2,4,3], 7 | 2 |
| [2,1,6,5,4], 9 | 2 |
| [3,1,7,11,2,9,8,21,62,33,19], 52 | 1 |
| [1,4,16,22,5,7,8,9,10], 39 | 3 |
| [1,4,16,22,5,7,8,9,10], 55 | 5 |
| [4,3,3,8,1,2,3], 11 | 2 |
| [1,4,16,22,5,7,8,9,10], 95 | 0 |

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
  
  console.log(minSubArrayLen(arr, num));
    
});

function minSubArrayLen(arr, target) {
  let start = 0;
  let end = 0;
  let sum = 0;
  let minLength = Infinity;

  while (end < arr.length) {
    sum += arr[end];

    while (sum >= target) {
      minLength = Math.min(minLength, end - start + 1);
      sum -= arr[start];
      start++;
    }

    end++;
  }

  return minLength === Infinity ? 0 : minLength;
}
```

# 시간 복잡도
- O(N)

# 접근 및 풀이방식
1. start와 end 포인터를 0으로 초기화합니다.
2. sum을 0으로 초기화하고, minLength를 무한대로 설정합니다.
3. end 포인터를 사용하여 배열을 순회하면서 sum에 현재 값을 더합니다.
4. sum이 목표 값 이상이 되면:
  - minLength를 현재 부분 배열의 길이와 비교하여 최소값으로 갱신합니다.
  - sum에서 start 포인터의 값을 빼고 start 포인터를 증가시킵니다.
5. end 포인터를 증가시킵니다.
6. 순회가 끝난 후, minLength가 여전히 무한대라면 0을 반환하고, 그렇지 않으면 minLength를 반환합니다.