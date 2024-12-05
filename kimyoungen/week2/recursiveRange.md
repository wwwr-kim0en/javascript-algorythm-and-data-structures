## 문제

숫자를 받으면 0부터 함수에 전달된 숫자까지의 모든 숫자를 더하는 recursiveRange라는 함수를 작성하시오.

## 내 풀이

- 반복문 사용 (iterative)

```typescript
function recursiveRange(num: number) {
	let total = 0;
	for (let i = 0; i <= num; i++) {
		total = total + i;
	}
	return total;
}
```

## 개선된 풀이 by Claude

- 재귀 사용

```typescript
function recursiveRange(num: number) {
	if (num <= 1) {
		return num;
	}
	return num + recursiveRange(num - 1);
}
```

## 답안 풀이 from 강의

```javascript
function recursiveRange(x) {
	if (x === 0) return 0;
	return x + recursiveRange(x - 1);
}
```
