# 슬라이딩 윈도우 (maxSubArraySum)

정수의 배열과 숫자가 주어졌을 때, 함수에 전달된 숫자의 길이를 가진 하위 배열의 최대 합을 구하는 maxSubarraySum이라는 함수를 작성하세요.

하위 배열은 원래 배열의 연속적인 요소로 구성되어야 한다는 점에 유의하세요. 아래 첫 번째 예제에서 [100, 200, 300]은 원래 배열의 하위 배열이지만 [100, 300]은 그렇지 않습니다.

제약조건:

- Time Complexity - O(N)
- Space Complexity - O(1)

## 접근한 방법

1. size 크기 만큼 배열의 합을 구한다.
1. 한 칸 씩 움직이면서 기존 합에서 제거되는 요소를 빼고, 새로 추가되는 요소를 더한다.

```javascript
예)
maxSubarraySum([100,200,300,400], 2) // 700
maxSubarraySum([1,4,2,10,23,3,1,0,20], 4) // 39
maxSubarraySum([-3,4,0,-2,6,-1], 2) // 5
maxSubarraySum([3,-2,7,-4,1,-1,4,-2,1],2) // 5
maxSubarraySum([2,3], 3) // null

function maxSubArraySum(arr: number[], size: number) {
  if (arr.length < size) return null;

  let sum = arr.slice(0, size).reduce((a, b) => a + b);
  let max = sum;

  for (let r = size; r < arr.length; r++) {
    sum = sum - arr[r - size] + arr[r];
    if (max < sum) max = sum;
  }

  return max;
}

```

## 답지에 나온 풀이 비교

최대값을 비교할 때 if 문을 쓰지 않고 `Math.max()` 를 사용할 수도 있다.
