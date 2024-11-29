# 다중포인터
## isSubsequence

### 문제
두 문자열을 받아 첫 번째 문자열의 문자가 두 번째 문자열의 문자의 일부에 포함되는지 확인하는 **isSubsequence**라는 함수를 작성합니다. 즉, 이 함수는 첫 번째 문자열의 문자가 **순서가 바뀌지 않고** 두 번째 문자열의 어딘가에 나타나는지 확인해야 합니다.
```
isSubsequence('hello', 'hello world'); // true
isSubsequence('sing', 'sting'); // true
isSubsequence('abc', 'abracadabra'); // true
isSubsequence('abc', 'acb'); // false (order matters)
```
솔루션에는 최소한 다음과 같은 복잡성이 있어야 합니다:
- 시간복잡도 - O(N + M)
- 공간복잡도 - O(1)

### 내 풀이
```javascript
function isSubsequence(str1,str2){
    if(str1.length > str2.length){return false}

    let i = 0;
    let j = 0;
    let sequenceString = ''

    while(j < str2.length){
        if(i < str1.length-1){
            if(str1[i] === str2[j]){
                sequenceString += str2[j]
                i += 1
                j += 1

            } else {
                j+=1
            }

        }
        if(i === str1.length-1){
            if(sequenceString === str1) { return true }
            if(str1[i] === str2[j]){
                sequenceString += str2[j]
            }
            j += 1
        }
    }
    return true // 왜 ??

}
```

### Claude 풀이1
- 시간복잡도: O(N + M)
- 공간복잡도: O(1)

1. str1의 각 문자를 순서대로 str2에서 찾습니다. 
2. 모든 문자가 순서대로 발견되면 true. 
3. str2를 완전히 순회했는데 모든 문자를 찾지 못하면 false.

```javascript
function isSubsequence(str1, str2) {
    let i = 0;  // str1의 인덱스
    let j = 0;  // str2의 인덱스

    while (j < str2.length) {
        // 현재 str1의 문자와 str2의 문자가 일치하면
        if (str1[i] === str2[j]) {
            i++;  // str1의 다음 문자로 이동
        }
        
        // str1의 모든 문자를 찾았다면 true 반환
        if (i === str1.length) {
            return true;
        }
        
        j++;  // str2의 다음 문자로 이동
    }
    
    return false;
}

```
