# 문제
Sliding Window - findLongestSubstring

# 예상 입출력

// Test cases
/*
'' // 0
'rithmschool' // 7
'thisisawesome' // 6
'thecatinthehat' // 7
'bbbbbb' // 1
'longestsubstring' // 8
'thisishowwedoit' // 6
*/

# 문제풀이

```js
const rl = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
});

const input = [];

rl.on("line", (line) => {
    input.push(line);
}).on("close", () => {
  console.log(findLongestSubstring(input[0]));
    
});

function findLongestSubstring(str) {
  let start = 0;
  let maxLength = 0;
  let seen = {};

  if(!str || str.length === 0) return 0;

  for (let end = 0; end < str.length; end++) {
    let char = str[end];
    if (seen[char] !== undefined && seen[char] >= start) {
      start = seen[char] + 1;
    }
    seen[char] = end;
    maxLength = Math.max(maxLength, end - start + 1);
  }

  return maxLength;
}
```

# 시간 복잡도
- O(N)

# 접근 및 풀이방식
1. start와 end 포인터를 0으로 초기화합니다.
2. maxLength를 0으로 초기화하고, seen 객체를 빈 객체로 초기화합니다.
3. 문자열을 순회하면서 각 문자의 인덱스를 seen 객체에 저장합니다.
4. 현재 문자가 이전에 등장한 적이 있고, 그 인덱스가 start보다 크거나 같다면 start를 갱신합니다.
5. 현재 문자의 인덱스를 seen 객체에 갱신합니다.
6. 현재 부분 문자열의 길이를 계산하여 maxLength를 갱신합니다.
7. 순회가 끝난 후 maxLength를 반환합니다.