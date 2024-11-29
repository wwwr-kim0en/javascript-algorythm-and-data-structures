# Sliding Window
## maxSubarraySum

### 문제 
정수의 배열과 숫자가 주어졌을 때, 함수에 전달된 숫자의 길이를 가진 하위 배열의 최대 합을 구하는 **maxSubarraySum**이라는 함수를 작성하세요.

하위 배열은 원래 배열의 연속적인 요소로 구성되어야 한다는 점에 유의하세요. 아래 첫 번째 예제에서 [100, 200, 300]은 원래 배열의 하위 배열이지만 [100, 300]은 그렇지 않습니다.

```
maxSubarraySum([100,200,300,400], 2) // 700
maxSubarraySum([1,4,2,10,23,3,1,0,20], 4)  // 39 
maxSubarraySum([-3,4,0,-2,6,-1], 2) // 5
maxSubarraySum([3,-2,7,-4,1,-1,4,-2,1],2) // 5
maxSubarraySum([2,3], 3) // null
```
제약조건
- 시간복잡도 - O(N)
- 공간복잡도 - O(1)




### 내 풀이
```javascript
function maxSubArraySum(array,num){
    
    if(array.length < num){return null}
    if(array.length === num){
        return array.reduce((acc,cur)=>acc+cur,0)
    }
    let maxSum = 0
    if(array.length > num){
        for(let i = 0; i <= array.length - num ; i++){
              
            //
        }
    }
}

```

### Claude 풀이
- 시간복잡도 - O(N)
- 공간복잡도 - O(1)

```javascript
function maxSubArraySum(array, num) {
    // 배열의 길이가 num보다 작으면 null 반환
    if (array.length < num) return null;

    // 첫 번째 윈도우의 합 계산
    // 첫 번째 num 개의 요소 합을 maxSum에 저장
    let maxSum = 0;
    for (let i = 0; i < num; i++) {
        maxSum += array[i];
    }

    // 현재 윈도우의 합 초기화
    let currentSum = maxSum;

    // 슬라이딩 윈도우 기법 적용 - 윈도우를 한 칸씩 이동하며 합 계산
    for (let i = num; i < array.length; i++) {
        // 이전 윈도우의 첫 요소 제거, 새로운 요소 추가
        currentSum = currentSum - array[i - num] + array[i];
        
        // 최대 합 갱신
        maxSum = Math.max(maxSum, currentSum);
    }

    return maxSum;
}
```
