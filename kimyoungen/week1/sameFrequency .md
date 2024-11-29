# 빈도수 세기 
## Same Frequency

### 문제
**sameFrequency**라는 함수를 작성하세요.
두 개의 양의 정수가 주어졌을 때, 두 숫자의 자릿수가 같은 빈도를 갖는지 구합니다.

여러분의 솔루션은 반드시 다음과 같은 복잡성을 가져야 합니다.
- 시간복잡도 : O(N)

```javascript
sameFrequency(182,281) // true
sameFrequency(34,14) // false
sameFrequency(3589578, 5879385) // true
sameFrequency(22,222) // false
```

### 내 풀이
- 시간 복잡도 - O(N)
- 공간 복잡도 - O(N)
```javascript
function sameFrequency (int1, int2) {
    const str1 = int1.toString()
    const str2 = int2.toString()
    const obj1 = {}
    const obj2 = {}
    
    if(str1.length !== str2.length){
        return false
    }
    
    for(let i = 0 ; i < str1.length ; i++){
        obj1[str1[i]] = (obj1[str1[i]] || 0) + 1
    }
    for(let j = 0; j < str2.length; j++){
        obj2[str2[j]] = (obj2[str2[j]] || 0) + 1
    }
    for(let key in obj1){
        if(obj1[key] !== obj2[key]){
            return false
        }
    }
    return true
}
```

### Claude 풀이
- 개선 포인트 
  1. 단일 객체 사용
  2. 루프 횟수 감소
  3. 더 간결한 로직

- 시간 복잡도 - O(N)
- 공간 복잡도 - O(N)

```javascript
function sameFrequency(int1, int2) {
    const str1 = int1.toString();
    const str2 = int2.toString();
    
    if(str1.length !== str2.length) return false;
    
    const frequencyCounter = {};
    
    for(let char of str1) {
        frequencyCounter[char] = (frequencyCounter[char] || 0) + 1;
    }
    
    for(let char of str2) {
        if(!frequencyCounter[char]) return false;
        frequencyCounter[char]--;
    }
    
    return true;
}
```

### 답안 풀이
