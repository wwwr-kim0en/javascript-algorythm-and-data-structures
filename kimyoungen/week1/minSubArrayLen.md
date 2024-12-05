# Sliding Window

## minSubArrayLen

### 문제

양수 배열과 양수라는 두 개의 매개 변수를 받아들이는 **minSubArrayLen**이라는 함수를 작성하세요.

이 함수는 합이 함수에 전달된 정수보다 크거나 같은 ~~인접한~~ 이어진 ~~하위~~ 부분 배열의 최소 길이를 반환해야 합니다. 값이 없는 경우 0을 반환합니다.

```
minSubArrayLen([2,3,1,2,4,3], 7) // 2 -> because [4,3] is the smallest subarray
minSubArrayLen([2,1,6,5,4], 9) // 2 -> because [5,4] is the smallest subarray
minSubArrayLen([3,1,7,11,2,9,8,21,62,33,19], 52) // 1 -> because [62] is greater than 52
minSubArrayLen([1,4,16,22,5,7,8,9,10],39) // 3
minSubArrayLen([1,4,16,22,5,7,8,9,10],55) // 5
minSubArrayLen([4, 3, 3, 8, 1, 2, 3], 11) // 2
minSubArrayLen([1,4,16,22,5,7,8,9,10],95) // 0
```

- 시간복잡도 - O(n)
- 공간복잡도 - O(1)

### 내 풀이

```typescript
function minSubArrayLen(arr: number[], num1: number) {
	let length = 0;
	if (arr.length === 0) {
		return 0;
	}
	for (let i = 1; i <= arr.length; i++) {
		for (let j = 0; j < arr.length - i; j++) {
			const;
		}
	}
}
```

## 답안 풀이 from 강의

```
function minSubArrayLen(nums, sum) {
  let total = 0;
  let start = 0;
  let end = 0;
  let minLen = Infinity;

  while (start < nums.length) {
    // if current window doesn't add up to the given sum then
		// move the window to right
    if(total < sum && end < nums.length){
      total += nums[end];
			end++;
    }
    // if current window adds up to at least the sum given then
		// we can shrink the window
    else if(total >= sum){
      minLen = Math.min(minLen, end-start);
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
