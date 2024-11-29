# 슬라이딩 윈도우 (minSubArrayLen)

양수 배열과 양수라는 두 개의 매개 변수를 받아들이는 minSubArrayLen이라는 함수를 작성하세요.

이 함수는 합이 함수에 전달된 정수보다 크거나 같은 인접한 하위 배열의 최소 길이를 반환해야 합니다. 값이 없는 경우 0을 반환합니다.

- Time Complexity - O(n)
- Space Complexity - O(1)

## 접근한 방법

1. 첫 요소가 조건을 만족하는 경우 1을 리턴
1. 투 포인터를 사용해 l = 0, r = 1 인덱스 부터 순회하며 합을 구한다.
1. 조건을 만족할 때 까지 r 을 움직인다.
1. 조건을 만족하는 경우 l 을 움직여 최소한의 요소로 만족하는 경우를 확인한다.

```javascript
예)
minSubArrayLen([2,3,1,2,4,3], 7) // 2 -> because [4,3] is the smallest subarray
minSubArrayLen([2,1,6,5,4], 9) // 2 -> because [5,4] is the smallest subarray
minSubArrayLen([3,1,7,11,2,9,8,21,62,33,19], 52) // 1 -> because [62] is greater than 52
minSubArrayLen([1,4,16,22,5,7,8,9,10],39) // 3
minSubArrayLen([1,4,16,22,5,7,8,9,10],55) // 5
minSubArrayLen([4, 3, 3, 8, 1, 2, 3], 11) // 2
minSubArrayLen([1,4,16,22,5,7,8,9,10],95) // 0

function minSubArrayLen(arr: number[], num: number) {
  let sum = arr[0];
  if (sum === num) return 1;

  let l = 0;
  let r = 1;
  sum += arr[r];
  let min = Infinity;

  while (r < arr.length) {
    if (num <= sum) {
      min = Math.min(min, r - l);
      sum -= arr[l++];
    } else {
      sum += arr[++r];
    }
  }

  return min === Infinity ? 0 : min + 1;
}
```
