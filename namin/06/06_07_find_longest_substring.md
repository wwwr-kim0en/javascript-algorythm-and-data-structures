### 문제풀이

- 문자열을 받아 모든 고유 문자가 포함된 가장 긴 하위 문자열의 길이를 반환해야 합니다.

### 예제

- findLongestSubstring('') // 0
- findLongestSubstring('rithmschool') // 7
- findLongestSubstring('thisisawesome') // 6
- findLongestSubstring('thecatinthehat') // 7
- findLongestSubstring('bbbbbb') // 1
- findLongestSubstring('longestsubstring') // 8
- findLongestSubstring('thisishowwedoit') // 6

### 수도코드

- start, end, map 변수 선언
- str 길이 만큼 반복문 돌고 고유한 문자열인지 체크
  - 고유한 문자열이라면 end++, map에 str[end] 추가, result에 최대값 추가
  - 고유한 문자열이 아니라면 start++, map에서 str[start] 제거

```javascript
function findLongestSubstring(str) {
  let start = 0;
  let map = new Map();
  let result = 0;

  for (let end = 0; end < str.length; end++) {
    const char = str[end];

    while (map.has(char)) {
      map.delete(str[start]);
      start++;
    }

    map.set(char, true);
    result = Math.max(result, end - start + 1);
  }

  return result;
}
```
