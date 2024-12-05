## 문제

숫자를 받아 해당 숫자의 계승(팩토리얼)을 반환하는 팩토리얼 함수를 작성하시오.팩토리얼은 정수와 그 아래의 모든 정수의 곱입니다.<br/>
예를 들어, 4 팩토리얼 (4!)은 4 _ 3 _ 2 \* 1 입니다. 팩토리얼 0(0!)은 항상 1입니다.

## 내 풀이

```typescript
function factorial(num: number) {
	if (num < 0) {
		throw new Error('양수를 넣어주세요.');
	}
	if (num === 0) {
		return 1;
	}
	return num * factorial(num - 1);
}
```

## 개선된 풀이 by Claude - 동일

## 답안 풀이 from 강의 - 동일

```

function factorial(x){
   if (x < 0 ) return 0;
   if (x <= 1 ) return 1;
   return x * factorial(x-1);
}
```
