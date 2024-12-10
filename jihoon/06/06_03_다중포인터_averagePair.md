# 다중 포인터 (averagePair)

averagePair라는 함수를 작성합니다. 정렬된 정수 배열과 목표 평균이 주어졌을 때, 배열에 쌍의 평균이 목표 평균과 같은 값의 쌍이 있는지 확인합니다. 목표 평균과 일치하는 쌍이 두 개 이상 있을 수 있습니다.

보너스 제약조건:

- Time: O(N)
- Space: O(1)

## 접근한 방법

1. 평균 값을 비교할 때 포인터를 다른 방향으로 이동시켜야 평균과 값 비교를 통해 어떤 포인터를 움직일지 결정할 때 유리하다 생각했다.

```javascript
예)
averagePair([1, 2, 3], 2.5); // true
averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8); // true
averagePair([-1, 0, 3, 4, 5, 6], 4.1); // false
averagePair([], 4); // false

// - Time: O(N)
// - Space: O(1)
function averagePair(arr: number[], avg: number) {
  let l = 0;
  let r = arr.length - 1;

  while (l < r) {
    const currentAvg = (arr[l] + arr[r]) / 2;
    if (currentAvg === avg) return true;
    currentAvg < avg ? l++ : r--;
  }

  return false;
}

```
