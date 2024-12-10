## 문제

밑과 지수를 받아들이는 power라는 함수를 작성합니다. 이 함수는 밑의 거듭제곱을 지수로 반환해야 합니다. 이 함수는 `Math.pow()`의 기능을 모방해야 합니다. 음의 밑과 지수에 대해서는 신경쓰지 마세요.

## 내 풀이

- 오답

1. result 변수가 초기화되지 않았습니다. 이로 인해 첫 번째 곱셈에서 오류가 발생할 수 있습니다.
2. 재귀 함수 helper에서 result를 사용하기 전에 초기화하지 않았습니다.
3. 재귀 호출에서 return helper(arr.slice(1));은 마지막 반복에서 result를 반환하지 않습니다.

```typescript
function power(num1: number, num2: number) {
	// num1 을 num2번 곱한다.

	let result;

	// 음의 밑과 지수일 때 => 무시
	if (num1 < 0 || num2 < 0) {
		return;
	}

	// 지수가 0인 경우 => 무조건 1
	if (num2 === 0) {
		return 1;
	}

	const numbers = Array(num2).fill(num1);

	const helper = (arr) => {
		if (arr.length === 0) return;
		result = result * arr[0];
		return helper(arr.slice(1));
	};
	return helper(numbers);
}
```

- 정답

1. result 변수를 명시적으로 초기화
2. 재귀 함수 대신 단순화된 반복문 사용
3. 첫 번째 요소의 길이가 1일 때 해당 요소 반환
4. 배열의 요소들을 곱셈 연산

```typescript
function power(num1: number, num2: number) {
	// 음의 밑과 지수일 때 => 무시
	if (num1 < 0 || num2 < 0) {
		return;
	}

	// 지수가 0인 경우 => 무조건 1
	if (num2 === 0) {
		return 1;
	}

	const numbers = Array(num2).fill(num1);

	const helper = (arr) => {
		// result를 첫 번째 요소로 초기화
		if (arr.length === 1) return arr[0];

		// 첫 번째 요소로 result 초기화
		let result = arr[0];

		// 나머지 요소들과 곱셈 수행
		for (let i = 1; i < arr.length; i++) {
			result *= arr[i];
		}

		return result;
	};

	return helper(numbers);
}
```

## 개선된 풀이 by Claude - 재귀 사용했을 떄

- result의 초기값을 명시적으로 설정
- 종료 조건을 명확히 함
- 불필요한 배열 생성 제거

```typescript
function power(num1: number, num2: number): number {
	// 음의 밑과 지수는 무시
	if (num1 < 0 || num2 < 0) {
		return;
	}

	// 지수가 0인 경우 1 반환
	if (num2 === 0) {
		return 1;
	}

	// result 초기값 설정
	const helper = (base: number, exp: number, result: number = 1): number => {
		// 지수가 0이 되면 결과 반환
		if (exp === 0) return result;

		// 재귀적으로 base를 곱하고 지수 감소
		return helper(base, exp - 1, result * base);
	};

	return helper(num1, num2);
}
```

## 개선된 풀이 by Claude - 재귀 사용 안 했을 때

```typescript
function power(num1: number, num2: number): number {
	// 음의 밑과 지수는 무시
	if (num1 < 0 || num2 < 0) {
		return;
	}

	// 지수가 0인 경우 1 반환
	if (num2 === 0) {
		return 1;
	}

	// 재귀 대신 단순한 곱셈 사용
	let result = 1;
	for (let i = 0; i < num2; i++) {
		result *= num1;
	}
	return result;
}
```

## 답안 풀이 from 강의

```
function power(base, exponent){
    if(exponent === 0) return 1;
    return base * power(base,exponent-1);
}
```
