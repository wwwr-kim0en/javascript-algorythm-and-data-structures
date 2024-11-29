# 문제 유형
Multiple Pointers - countUniqueValues

# 예상 입출력

| 입력 | 출력 |
| --- | --- |
| `1,1,1,1,1,2` | `2` |
| `1,2,3,4,4,4,7,7,12,12,13` | `7` |
| `` | `0` |
| `-2,-1,-1,0,1` | `4` |


# 문제풀이

```js
const rl = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
});

const input = [];

rl.on("line", (line) => {
    line.split(",").map((el) => input.push(parseInt(el)));
}).on("close", () => {
    const [n, m] = input
    console.log(sameFrequency(n,m))
    
});

function sameFrequency(num1, num2) {
    // 숫자를 문자열로 변환
    const str1 = num1.toString();
    const str2 = num2.toString();

    // 길이가 다르면 빈도가 같을 수 없음
    if (str1.length !== str2.length) return false;

    const frequencyCount = {};

    // 첫 번째 숫자의 자릿수를 카운팅
    for (let char of str1) {
        frequencyCount[char] = (frequencyCount[char] || 0) + 1;
    }

    // 두 번째 숫자의 자릿수를 비교하며 카운팅 감소
    for (let char of str2) {
        if (!frequencyCount[char]) return false; // 빈도 불일치 시 false
        frequencyCount[char]--;
    }

    return true;
}


```

# 시간 복잡도
- O(n)

# 접근 및 풀이방식
빈 배열 처리: 배열이 비어 있으면 즉시 0을 반환합니다.
투 포인터 사용:
첫 번째 포인터 i는 고유 값을 기록합니다.
두 번째 포인터 j는 배열을 순회하며, 고유 값을 발견할 때마다 i를 증가시키고 값을 업데이트합니다.
결과 반환: 포인터 i의 위치에 1을 더한 값이 고유 값의 개수입니