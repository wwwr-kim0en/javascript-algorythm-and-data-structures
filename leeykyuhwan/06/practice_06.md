# 문제
Multiple Pointers - isSubsequence

# 예상 입출력

| 입력 | 출력 |
|---|---|
| 'hello', 'hello world'	| true  |
| 'sing', 'sting' | true |
| 'abc', 'abracadabra'  | true  |
| 'abc', 'acb'	 | false |

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
  
  console.log(isSubsequence(n, m));
    
});

function isSubsequence(str1, str2) {
  let i = 0;
  let j = 0;

  while (j < str2.length) {
      if (str1[i] === str2[j]) {
          i++;
      }
      if (i === str1.length) {
          return true;
      }
      j++;
  }

  return false;
}
```

# 시간 복잡도
- O(N + M)

# 접근 및 풀이방식
1. 두 포인터 사용:
첫 번째 문자열과 두 번째 문자열을 순회하면서 두 포인터를 사용하여 첫 번째 문자열의 각 문자가 두 번째 문자열에 순서대로 존재하는지 확인합니다.
2. 결과 반환:
첫 번째 문자열의 모든 문자가 두 번째 문자열에 순서대로 존재하면 true를 반환하고, 그렇지 않으면 false를 반환합니다.