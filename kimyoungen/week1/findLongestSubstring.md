# Sliding Window

## findLongestSubstring

### 문제

문자열을 받아 모든 고유 문자가 포함된 가장 긴 하위 문자열의 길이를 반환하는 **findLongestSubstring**이라는 함수를 작성하세요.

```
findLongestSubstring('') // 0
findLongestSubstring('rithmschool') // 7
findLongestSubstring('thisisawesome') // 6
findLongestSubstring('thecatinthehat') // 7
findLongestSubstring('bbbbbb') // 1
findLongestSubstring('longestsubstring') // 8
findLongestSubstring('thisishowwedoit') // 6
```

- 시간복잡도 - O(n)

### 내 풀이

```typescript
// 풀이 실패
function findLongestSubstring(string: string) {
	if (typeof string !== 'string') return;
	if (string === '') {
		return 0;
	}

	let longestLength = 0;
	let start = 0;
	let end = 0;

	for (let i = 0; i < string.length; i++) {
		if (string.indexOf(string[i]) === -1) {
			// string[i] 를 포함하고 있지 않으면
			end += 1;
		} else {
			// string[i] 를 포함하고 있으면
			const length = start - end;
			if (longestLength < length) {
				longestLength = length;
			}
			start = i - 1;
			end = i - 1;
		}
	}
	return start - end;
}
```

1. indexOf 조건 로직이 잘못되었습니다.
2. 부분 문자열의 길이 계산 방식이 정확하지 않습니다.
3. 중복 문자를 처리하는 로직이 미흡합니다.

### 개선된 풀이 by Claude

```typescript
function findLongestSubstring(str: string): number {
	if (typeof str !== 'string') return 0;
	if (str === '') return 0;

	const charMap = new Map<string, number>();
	let start = 0;
	let maxLength = 0;

	for (let end = 0; end < str.length; end++) {
		const currentChar = str[end];

		// 이미 윈도우 안에 있는 문자라면 start 포인터 조정
		if (charMap.has(currentChar)) {
			start = Math.max(start, charMap.get(currentChar)! + 1);
		}

		// 현재 문자의 인덱스 업데이트
		charMap.set(currentChar, end);

		// 현재 윈도우의 길이와 최대 길이 비교
		maxLength = Math.max(maxLength, end - start + 1);
	}

	return maxLength;
}
```

### 답안 풀이 from 강의

```javascript
function findLongestSubstring(str) {
	let longest = 0;
	let seen = {};
	let start = 0;

	for (let i = 0; i < str.length; i++) {
		let char = str[i];
		if (seen[char]) {
			start = Math.max(start, seen[char]);
		}
		// index - beginning of substring + 1 (to include current in count)
		longest = Math.max(longest, i - start + 1);
		// store the index of the next char so as to not double count
		seen[char] = i + 1;
	}
	return longest;
}
```
