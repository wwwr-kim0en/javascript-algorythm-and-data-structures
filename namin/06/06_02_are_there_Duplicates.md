### 문제설명

- 전달된 인수중에 중복된 요소가 있는지 확인한다.

### 수도코드

- 정렬이 되어 있지 않은 경우

- 값이 있는지 체크할 객체 하나 생성
- 인수를 담은 배열을 돌면서 객체에 값이 있는지 체크
  - 값이 있다면 true 리턴
  - 값이 없다면 값을 true로 설정
- false 리턴

```javascript
//O(n)
function areThereDuplicates() {
  const obj = {};

  for (let i = 0; i < arguments.length; i++) {
    const arg = arguments[i];

    if (obj[arg]) {
      return true;
    } else {
      obj[arg] = true;
    }
  }

  return false;
}
```

- 배열을 정렬한다.
- 인수를 담은 배열에서 다중포인터를 사용한다.
- i는 기준점, j는 현재 위치
- 배열을 돌면서 i와 j를 비교한다.
  - 만약 i와 j가 값이 다르다면 i를 1 증가 시키고, 배열 i번째에 j의 값을 추가한다.
  - 만약 i와 j가 값이 같다면 true를 리턴한다.
- false를 리턴한다.

```javascript
//O(n log n)
function areThereDuplicates() {
  //O(n log n)
  const arr = arguments.sort();

  let i = 0;
  //O(n)
  for (let j = 1; j < arr.length; j++) {
    if (arr[i] == arr[j]) {
      return true;
    } else {
      i++;
      arr[i] = arr[j];
    }
  }
  return false;
}
```

```javascript
function areThereDuplicates() {
  //O(n)
  return new Set(arguments).size !== arguments.length;
}
```
