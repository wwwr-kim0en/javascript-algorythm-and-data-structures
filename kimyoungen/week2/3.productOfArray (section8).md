## 문제

숫자 배열을 받아 모든 숫자의 곱을 반환하는 productOfArray라는 함수를 작성하시오

## 내 풀이

```typescript
function productOfArray(arr: number[]) {
	if (!arr.length) {
		throw new Error('한 개 이상의 원소가 있어야 합니다.');
	}

	let total = 1;
	for (const number of arr) {
		total = total * number;
	}
	return total;
}
```

## 개선된 풀이 by Claude

- 반복문을 통한 풀이 - 동일

- 재귀를 사용한 풀이

```typescript
function productOfArray(arr: number[]): number {
	// 빈 배열 처리
	if (arr.length === 0) {
		throw new Error('한 개 이상의 원소가 있어야 합니다.');
	}

	// 배열의 길이가 1이면 첫 번째 요소 반환 (기본 케이스)
	if (arr.length === 1) {
		return arr[0];
	}

	// 첫 번째 요소와 나머지 배열의 곱 재귀적으로 계산
	return arr[0] * productOfArray(arr.slice(1));
}
```

## 답안 풀이 from 강의

```
function productOfArray(arr) {
    if(arr.length === 0) {
        return 1;
    }
    return arr[0] * productOfArray(arr.slice(1));
}
```
