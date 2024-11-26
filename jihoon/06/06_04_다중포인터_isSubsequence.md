# 다중 포인터 (isSubsequence)

두 문자열을 받아 첫 번째 문자열의 문자가 두 번째 문자열의 문자의 일부에 포함되는지 확인하는 isSubsequence라는 함수를 작성합니다. 즉, 이 함수는 첫 번째 문자열의 문자가 순서가 바뀌지 않고 두 번째 문자열의 어딘가에 나타나는지 확인해야 합니다.

솔루션에는 최소한 다음과 같은 복잡성이 있어야 합니다:

Time Complexity - O(N + M)

Space Complexity - O(1)

## 접근한 방법

1.

```javascript
예)
isSubsequence('hello', 'hello world'); // true
isSubsequence('sing', 'sting'); // true
isSubsequence('abc', 'abracadabra'); // true
isSubsequence('abc', 'acb'); // false (order matters)

// Time Complexity - O(n)
// Space Complexity - O(1)
function isSubsequence(str1: string, str2: string) {
  let i = 0;

  for (const c of str2) {
    if (str1[i] === c) {
      i++;
    }
  }

  return str1.length === i;
}
```

## 답지에 나온 풀이 비교

str1에 해당하는 입력값이 비어있는 경우와, 배열을 순회하는 과정에서 `str1.length === i` 이 만족하는 경우 배열을 더 이상 순회할 필요가 없는 걸 놓쳤다.
