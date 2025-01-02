# Sorted Sort

Similar to bubble Sort, but instead of first placing large values into sorted position,
it places small values into sorted position.

move beginning to end
swap start and the smallest(min)

## Selection SOrt Pseudocode

 - Store the first element as the smallest value you've seen so far.
 - Compare this item to the next item in the array until you find a smaller number.
 - If a smaller number is found, designate that smaller number to be the new "minimum" and continue until the end of the array.
 - If the "minimum" is not the value (index) you initially began with, swap the two values.
 - Repeat this with the next element until the array is sorted.

```typescript
function selectionSort(arr:number[]){
		let smallestIndex = 0;
		
		for(let i = smallestIndex; i < arr.length ; i++){
				
				if(arr[i] > arr[i+1]){
					if(i === arr.length-2){
							[arr[smallestIndex],arr[i+1]] = [arr[i+1], arr[smallestIndex]]
						}
					smallestIndex = i+1;
                }
				
        }
}

```
