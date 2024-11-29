### 문제설명

- 두개의 문자열을 입력받는다.
- 첫번째 문자열이 순서가 바뀌지 않고 두번째 문자열에 포함되는지 체크한다.
- 포함되면 true, 아니면 false를 리턴한다.

### 수도코드

- 두개 포인터 생성
- i는 두번째 문자열에서 첫번째 문자열이 포함된 인덱스, j는 현재 위치
- str2를 순회하면서 현재값이 str[i]와 동일한지 비교한다.
  - 만약 값이 같다면 i++;
  - 만약 i가 str1.length와 같다면 return true
- return i == str1.length

### 예시

- isSubsequence('hello', 'hello world'); // true
- isSubsequence('sing', 'sting'); // true
- isSubsequence('abc', 'abracadabra'); // true
- isSubsequence('abc', 'acb'); // false (order matters)

```javascript
// O(n)
function isSubsequence(str1, str2) {
  let i = 0;
  // O(n);
  for (let j = 0; j < str2.length; j++) {
    if (str2[j] == str1[i]) {
      i++;
    }

    if (i == str1.length) {
      return true;
    }
  }

  return i == str1.length;
}
```
