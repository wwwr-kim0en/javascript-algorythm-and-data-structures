### 문제설명

- 두개의 정수를 입력받아 정수를 이루는 숫자들의 빈도수가 같은지를 리턴하는 함수를 구현한다.
- 음수가 존재하는 케이스는 무시한다.

### 수도코드

- 만약 자릿수가 다르다면 false를 리턴한다.

- 첫번째 정수의 구성요소를 카운팅할 객체 생성
- 첫번째 정수를 문자열로 만들어 순회하고 객체에 빈도수 카운팅
- 두번째 정수를 문자열로 만들어 순회하고 카운팅 객체와 비교한다.
  - 만약 값이 없거나 0이라면 false를 리턴한다.
  - 만약 값이 있으면 객체에서 빈도를 1을 감소시킨다.
- true로 리턴한다.

```javascript
//O(n)
function sameFrequency(num1, num2) {
  let counter = new Map();

  let strNum1 = String(num1);
  let strNum2 = String(num2);

  if (strNum1.length != strNum2.length) {
    return false;
  }

  //O(n)
  for (let i = 0; i < strNum1.length; i++) {
    const n = strNum1[i];
    counter.set(n, (counter.get(n) || 0) + 1);
  }

  //O(n)
  for (let i = 0; i < strNum2.length; i++) {
    const n = strNum2[i];

    if (!counter.get(n)) {
      return false;
    }

    counter.set(n, counter.get(n) - 1);
  }

  return true;
}
```
