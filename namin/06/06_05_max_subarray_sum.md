### 문제설명

- 정수의 배열과 길이가 주어졌을 때, 길이만큼의 하위 집합중 가장 큰 합을 구해야 한다.
- 하위 집합은 연속적이다.
- 배열은 정렬되지 않음.

### 수도코드

- 슬라이딩 윈도우 패턴 적용

- maxSum, tempSum 변수 생성.
- 배열의 앞에서 길이만큼 하위 집합 합 구해서 tempSum에 할당
- 반복문 돌면서 (하위 집합이 항상 길이만큼 포함 될 수 있어야 함)
- 이전 값 빼고, 새로운 값 더하고 해서 tempSum 재할당.
- maxSum와 비교해보고 크다면 할당

- 배열이 길이보다 짧다면 null

### 예제

- maxSubarraySum([100,200,300,400], 2) // 700
- maxSubarraySum([1,4,2,10,23,3,1,0,20], 4) // 39
- maxSubarraySum([-3,4,0,-2,6,-1], 2) // 5
- maxSubarraySum([3,-2,7,-4,1,-1,4,-2,1],2) // 5
- maxSubarraySum([2,3], 3) // null

```javascript
function maxSubarraySum(arr, length) {
  if (arr.length < length) {
    return null;
  }

  let maxSum = -Infinity;
  let tempSum = 0;

  //O(n)
  for (let n of arr.slice(0, length)) {
    tempSum += n;
  }

  //O(n)
  for (let i = 1; i <= arr.length - length; i++) {
    tempSum = tempSum - arr[i - 1] + arr[i + length - 1];

    if (maxSum < tempSum) {
      maxSum = tempSum;
    }
  }

  return maxSum;
}
```
