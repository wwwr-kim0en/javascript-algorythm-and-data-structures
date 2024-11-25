# 빈도수 세기 (sameFrequency)

sameFrequency라는 함수를 작성하세요. 두 개의 양의 정수가 주어졌을 때, 두 숫자의 자릿수가 같은 빈도를 갖는지 구합니다.

여러분의 솔루션은 반드시 다음과 같은 복잡성을 가져야 합니다.:

Time: O(N)

## 접근한 방법

빈도수 세기 패턴을 통해 정렬되지 않은 요소들이 같은 빈도를 갖는지 확인할 수 있다.

```javascript
예)
sameFrequency(182, 281) // true
sameFrequency(34, 14) // false
sameFrequency(3589578, 5879385) // true
sameFrequency(22, 222) // false

// O(n)
function sameFrequency(num1: number, num2: number) {
  const num1Str = num1.toString();
  const num2Str = num2.toString();

  if (num1Str.length !== num2Str.length) return false;

  const num1Counter = {};

  for (const c of num1Str) {
    num1Counter[c] = (num1Counter[c] || 0) + 1;
  }

  for (const c of num2Str) {
    if (!num1Counter[c]) return false;
    num1Counter[c]--;
  }

  return true;
}

```
