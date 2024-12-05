## 문제

숫자를 받아 피보나치 수열의 n번째 숫자를 반환하는 fib라는 재귀 함수를 작성하시오. 피보나치 수열은 1, 1로 시작하는 1, 1, 2, 3, 5, 8, ...의 정수의 수열이며, 모든 수는 이전 두 수의 합과 같다는 것을 명심하세요.

## 내 풀이

```typescript
function fib(num: number) {
	if (num < 0) {
		throw new Error('0 이상이어야 합니다.');
	}
	if (num <= 1) {
		return num; // 왜 f(0) 은 0인가?
	}
	return fib(num - 1) + fib(num - 2);
}
```

## 답안 풀이 
```
function fib(n){
    if (n <= 2) return 1;
    return fib(n-1) + fib(n-2);
}

```

