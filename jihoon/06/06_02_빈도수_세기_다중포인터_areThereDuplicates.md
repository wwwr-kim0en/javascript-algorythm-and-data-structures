# 빈도수 세기/다중포인터 (areThereDuplicates)

가변적인 수의 인수(a variable number of arguments)를 받아들이고 전달된 인자 중 중복이 있는지 확인하는 areThereDuplicates라는 함수를 구현합니다. 빈도 카운터 패턴 또는 다중 포인터 패턴을 사용하여 이 문제를 해결할 수 있습니다.
제약 조건:

- Time - O(n)
- Space - O(n)

보너스:

- Time - O(n log n)
- Space - O(1)

## 접근한 방법

- Time - O(n), Space - O(n)

  객체에 값을 순서대로 추가하고, 이미 값이 추가되어있으면 true를 리턴

- Time - O(n log n), Space - O(1)

  투 포인터 방법을 사용하기 위해 배열을 정렬한 후 투 포인터로 값을 비교했다.

```javascript
예)
areThereDuplicates(1, 2, 3); // false
areThereDuplicates(1, 2, 2); // true
areThereDuplicates("a", "b", "c", "a"); // true

// - Time - O(n)
// - Space - O(n)
function areThereDuplicates(...args) {
  const counter = {};

  for (const arg of args) {
    if (counter[arg]) return true;
    counter[arg] = 1;
  }

  return false;
}


// - Time - O(n log n)
// - Space - O(1)
function areThereDuplicates(...args) {
  args.sort();
  let l = 0;

  for (let r = 1; r < args.length; r++) {
    if (args[l] === args[r]) return true;
    l = r;
  }

  return false;
}
```
