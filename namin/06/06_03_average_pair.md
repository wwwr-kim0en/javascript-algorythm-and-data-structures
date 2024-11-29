### 문제설명

- 정렬된 정수 배열과 목표 평균이 입력값으로 주어진다.
- 배열에 쌍의 평균이 목표 평균과 같은 쌍이 있는지 체크한다.

### 예제

- averagePair([1,2,3],2.5) // true
- averagePair([1,3,3,5,6,7,10,12,19],8) // true
- averagePair([-1,0,3,4,5,6], 4.1) // false
- averagePair([],4) // false

### 수도코드

- 만약 배열이 2보다 크기가 작으면 false

- start는 시작점, end는 끝점

- 두 쌍의 평균과 목표평균을 비교한다.
- 같다면 true를 리턴한다.
- 같지 않고 퍙균이 목표평균보다 크다면 end를 1 감소시킨다.
- 같지 않고 평균이 목표평균보다 작다면 start를 1 증가시킨다.
- 반복문이 끝나면 false를 리턴한다.

```javascript
function averagePair(arr, avg) {
  if (arr.length < 2) {
    return false;
  }

  let start = 0;
  let end = arr.length - 1;

  //O(n)
  while (start < end) {
    const pairAvg = (arr[start] + arr[end]) / 2;

    if (avg == pairAvg) {
      return true;
    } else if (pairAvg > avg) {
      end--;
    } else {
      start++;
    }
  }

  return false;
}
```
