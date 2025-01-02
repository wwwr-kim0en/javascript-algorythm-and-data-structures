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
