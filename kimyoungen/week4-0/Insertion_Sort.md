# Insertion Sort 삽입 정렬

Builds up the sort by gradually creating a larger left half which is always sorted.

![SCR-20250102-ovun.png](..%2F..%2F..%2FScreenshots%2FSCR-20250102-ovun.png)


## Insertion Sort Pseudocode
- start by picking the second element in the array
- Now compare the second element with the one before it and swap if necessary
- Continue to the next element and if it is in the incorrect order, iterate through the sorted portion (i.e. the left side) to place the element in the correct place
- Repeat until the array is sorted


### Code by Me
```typescript
function insertionSort(arr:number[]):number[]{
		for(let i = 1 ; i < arr.length ; i++){
			for(let j = 0; j < i; j++){
					if(arr[j] > arr[i]){
							[arr[j], arr[i]] = [arr[i], arr[j]]
                     }
			}
        }
		return arr;
}


```

### Code by Claude
```typescript
function insertionSort(arr: number[]): number[] {
    for (let i = 1; i < arr.length; i++) {
        let currentValue = arr[i];
        let j = i - 1;
        
        // Move elements that are greater than currentValue
        // to one position ahead of their current position
        while (j >= 0 && arr[j] > currentValue) {
            arr[j + 1] = arr[j];
            j--;
        }
        
        // Place currentValue in its correct position
        arr[j + 1] = currentValue;
    }
    
    return arr;
}
```

### Code From the Lecture
```typescript
function insertionSort(arr:number[]):number[]{
		for(let i = 1; i < arr.length ; i++){
			let currentVal = arr[i];
			for(let j = 0; j >= 0 && arr[j] > currentVal; j--){
				arr[j+1] = arr[j];
            }
			arr[j+1] = currentVal;
        }
    return arr
}
```

### when to use
- 데이터가 하나씩 들어오는 동시에 정렬을 해야할 때 (전체 배열이 주어지는 게 아닌)
