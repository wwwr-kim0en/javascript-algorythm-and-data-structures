### 문제설명

- 양수 배열과 양수를 입력값으로 받음
- 하위 집합의 최소 길이를 반환한다.
- 하위 집합의 조건은 양수보다 같거나 커야 한다.
- 값이 없는 경우 0을 반환한다.
- 하위 집합은 연속적이어야 한다.

### 예제

{
i: 0,
l: 3,
tempSum: 0,
}

- minSubArrayLen([2,3,1,2,4,3], 7) // 2 -> because [4,3] is the smallest subarray
- minSubArrayLen([2,1,6,5,4], 9) // 2 -> because [5,4] is the smallest subarray
- minSubArrayLen([3,1,7,11,2,9,8,21,62,33,19], 52) // 1 -> because [62] is greater than 52
- minSubArrayLen([1,4,16,22,5,7,8,9,10],39) // 3
- minSubArrayLen([1,4,16,22,5,7,8,9,10],55) // 5
- minSubArrayLen([4, 3, 3, 8, 1, 2, 3], 11) // 2
- minSubArrayLen([1,4,16,22,5,7,8,9,10],95) // 0

### 수도코드

- 배열의 길이가 0이면 0을 리턴한다.

- 현재 인덱스 기록할 i, 윈도우 길이를 저장할 l, 임시합을 저장할 tempSum 변수 생성
- i = 0, l = 1, tempSum = 0

- 길이가 배열의 크기보다 작거나 같다면

  - 만약 i가 길이보다 짧으면 tempSum에 i값 더하고 인덱스를 1증가한다.
  - 만약 i가 길이와 같거나 길면 이전값빼고, 새로운값을 tempSum에 더하고 인덱스를 1증가한다.

  - 만약 tempSum이 양수보다 같거나 크다면 l을 리턴한다.

  - 만약 인덱스가 배열의 끝점이라면
    - 인덱스 0, tempSum = 0, l은 1증가

- 반복문이 끝나면 0을 리턴한다.

```javascript
function minSubArrayLen(array, num) {
  if (array.length == 0 || num == 0) {
    return 0;
  }

  let i = 0;
  let l = 1;
  let tempSum = 0;

  //O(n^2)
  while (l <= array.length) {
    if (i < l) {
      tempSum = tempSum + array[i];
      i++;
    } else {
      tempSum = tempSum - array[i - l] + array[i];
      i++;
    }

    if (tempSum >= num) {
      return l;
    }

    if (i == array.length) {
      i = 0;
      tempSum = 0;
      l = l + 1;
    }
  }

  return 0;
}
```

### 리팩터링

- 기존 코드는 O(n^2)의 시간 복잡도를 갖는다.
- 시간 복잡도를 낮추기 위해 슬라이딩 윈도우 기법을 적용한다.

- start = 0와 end = 0, 결과값에 대한 변수를 설정한다.
- 만약 start와 end가 배열의 범위 안에 있다면
- 윈도우의 합이 정수보다 작다면 end를 1증가시킨다.
- 윈도우의 합이 정수보다 갖거나 크다면 start와 end의 차이가 result보다 작다면 결과에 기록하고 start를 1증가시킨다.

```javascript
function minSubArrayLen(array, n) {
  if (!array.length) {
    return 0;
  }

  let start = 0;
  let end = 0;
  let result = Infinity;
  let sumOfWindow = 0;

  while (start < array.length - 1 && end < array.length - 1) {
    if (sumOfWindow < n) {
      end++;
      sumOfWindow += array[end];
    } else {
      const diff = end - start;
      if (diff < result) {
        result = diff;
      }

      start++;
      sumOfWindow -= array[start];
    }
  }

  return result == Infinity ? 0 : result;
}
```

### solution

```javascript
function minSubArrayLen(nums, sum) {
  let total = 0;
  let start = 0;
  let end = 0;
  let minLen = Infinity;

  while (start < nums.length) {
    // if current window doesn't add up to the given sum then
    // move the window to right
    if (total < sum && end < nums.length) {
      total += nums[end];
      end++;
    }
    // if current window adds up to at least the sum given then
    // we can shrink the window
    else if (total >= sum) {
      minLen = Math.min(minLen, end - start);
      total -= nums[start];
      start++;
    }
    // current total less than required total but we reach the end, need this or else we'll be in an infinite loop
    else {
      break;
    }
  }

  return minLen === Infinity ? 0 : minLen;
}
```
