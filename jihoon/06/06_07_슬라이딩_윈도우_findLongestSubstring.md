# 슬라이딩 윈도우 (findLongestSubstring)

문자열을 받아 모든 고유 문자가 포함된 가장 긴 하위 문자열의 길이를 반환하는 findLongestSubstring이라는 함수를 작성하세요.

Time Complexity - O(n)

## 접근한 방법

1. 순회하면서 문자를 저장하고, 이미 저장한 문자를 만나면 저장했던 문자를 하나씩 지우는 방법으로 접근
1. O(n2) 의 시간 복잡도를 가지는 문제점 발견
1. 문자의 인덱스 값을 같이 저장하도록 변경
1. 같은 문자를 만나면 l = 문자의 인덱스 + 1 로 설정
1. 문자의 인덱스 값이 l 값 보다 작은 경우 예외처리 놓쳐서 헤맴
1. for 문 초기값을 1로 설정한 부분에서 2차 헤맴

```javascript
예)
findLongestSubstring('') // 0
findLongestSubstring('rithmschool') // 7
findLongestSubstring('thisisawesome') // 6
findLongestSubstring('thecatinthehat') // 7
findLongestSubstring('bbbbbb') // 1
findLongestSubstring('longestsubstring') // 8
findLongestSubstring('thisishowwedoit') // 6

function findLongestSubstring(str: string) {
  if (!str) return 0;
  if (str.length === 1) return 1;

  let l = 0;
  let record = {};
  let max = -Infinity;

  for (let r = 0; r < str.length; r++) {
    if (str[r] in record) {
      l = Math.max(l, record[str[r]] + 1);
    }

    record[str[r]] = r;
    max = Math.max(max, r - l);
  }

  return max + 1;
}
```
