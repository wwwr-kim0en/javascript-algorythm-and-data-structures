# 빈도수 세기, 다중 포인터
## areThereDuplicates

### 문제
가변적인 수의 인수(a variable number of arguments)를 받아들이고 전달된 인자 중 중복이 있는지 확인하는 areThereDuplicates라는 함수를 구현합니다.  빈도 카운터 패턴 또는 다중 포인터 패턴을 사용하여 이 문제를 해결할 수 있습니다.
```
areThereDuplicates(1, 2, 3) // false
areThereDuplicates(1, 2, 2) // true 
areThereDuplicates('a', 'b', 'c', 'a') // true 
```
제약 조건
- 시간복잡도  O(n)
- 공간복잡도 O(n)

보너스
- 시간복잡도 O(n log n)
- 공간복잡도 O(1)

### 내 풀이
- 시간복잡도 - O(n)
- 공간복잡도 - O(n)
```javascript
function areThereDuplicates(...rest){
           let array = [...rest]
    const frequencyCounter = {}
    for(const item of array){
        if(frequencyCounter[item]){
            return true
        }
        frequencyCounter[item] = (frequencyCounter[item] || 0) + 1 
    }
    return false
}
```
### Claude 풀이1 - 다중 포인터 패턴
- 시간복잡도 - O(n log n)
- 공간복잡도 - O(1)
```javascript
function areThereDuplicates(...args) {
    // 정렬
    args.sort((a, b) => a > b ? 1 : -1);
    
    // 포인터로 비교
    let start = 0;
    let next = 1;
    
    while (next < args.length) {
        if (args[start] === args[next]) {
            return true;
        }
        start++;
        next++;
    }
    
    return false;
}
```

### Claude 풀이2 - Set
- 시간복잡도 - O(n)
- 공간복잡도 - O(n)
```javascript
function areThereDuplicates(...args) {
    return new Set(args).size !== args.length;
}
```
