## 다중 포인터
### averagePair

### 문제
**averagePair**라는 함수를 작성합니다. 
정렬된 정수 배열과 목표 평균이 주어졌을 때, 배열에 쌍의 평균이 목표 평균과 같은 값의 쌍이 있는지 확인합니다. 
목표 평균과 일치하는 쌍이 두 개 이상 있을 수 있습니다.

```
averagePair([1,2,3],2.5) // true
averagePair([1,3,3,5,6,7,10,12,19],8) // true
averagePair([-1,0,3,4,5,6], 4.1) // false
averagePair([],4) // false
```
보너스 제약조건:
- 시간복잡도: O(N)
- 공간복잡도: O(1)

### 내 풀이
- 시간 복잡도 - O(n)
- 공간 복잡도 - O(1)
```javascript
function averagePair(array,average){
    const sum = average * 2
    let left = 0
    let right = array.length -1
    whilte (left < right){
        if(array[left] + array[right] === sum){
            return true
        }
        if(array[left] + array[right] > sum){
            right -= 1
        }
        if(array[left] + array[right] < sum){
            left += 1
        }
    }
    return false
}
```
