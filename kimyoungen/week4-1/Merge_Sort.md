- Bubble, Selection , Insertion sorts can be efficient for small data sets
- for bigger data sets, we need to use more efficient algorithms => merge sort, quick sort, radix sort
- they(merge,quick,radix) improve time complexity from __O(m^2)__ to __O(n log n)__




# Merge Sort

- it's a combination of two things - merging and sorting
- Exploits the fact that arrays of 0 or 1 element are always sorted
- Works by decomposing an array into smaller arrays of 0 or 1 elements, then building up a newly sorted array

## Merging Arrays Pseudocode
- Create an empty array, take a look at the smallest values in each input array
- While there are still values we haven't looked at...
  - If the value in the first array is smaller than the value in the second array, push the value in the first array into our results and move on to the next value in the first array
  - If the value in the first array is larger than the value in the second array, push the value in the second array into our results and move on to the next value in the second array
  - Once we exhaust one array, push in all remaining values from the other array

### 내 풀이 코드
```typescript
function merge(arr:number[][]):number[]{
		const resultArr = [];
		let i = 0, j = 0;
		while(i < arr[0].length && j < arr[1].length){
				if(arr[0][i] < arr[1][j]){
						resultArr.push(arr[0][i]);
						i++;
        }
				if(arr[0][i] > arr[1][j]){
						resultArr.push(arr[1][j]);
						j++;
        }
				if(arr[0][i] === arr[1][j]){
            resultArr.push(arr[0][i]);
            resultArr.push(arr[1][j]);
            i++;
            j++;
        }
    }
		
		// ...?
		
    return resultArr;		
}
```
### 강의 코드
```typescript
function merge (arr1,arr2){
		    let results = [];
    let i = 0;
    let j = 0;
    while(i < arr1.length && j < arr2.length){
        if(arr2[j] > arr1[i]){
            results.push(arr1[i]);
            i++;
        } else {
            results.push(arr2[j])
            j++;
        }
    }
    while(i < arr1.length){
        results.push(arr1[i])
        i++;
    }
    while(j < arr2.length){
        results.push(arr2[j])
        j++;
    }
    return results;
}
```


## MergeSort Recursively Pseudocode
- Break up the array into halves until you have arrays that are empty or have one element
- Once you have smaller sorted arrays, merge those arrays with other sorted arrays until you are back at the full length of the array
- Once the array has been merged back together, return the merged (and sorted!) array

### 내 풀이 코드
```typescript
function mergeRecursive(arr1:number[],arr2:number[]):number[]{
		const results = []
    let i = Math.floor(arr1.length/2)
    if( i <= 1){
				 
    }
    arr2
    //...
    return results;
}
```

## 강의 코드
```typescript
		// Merge function from earlier
		function merge(arr1, arr2){
				let results = [];
				let i = 0;
				let j = 0;
				while(i < arr1.length && j < arr2.length){
						if(arr2[j] > arr1[i]){
								results.push(arr1[i]);
								i++;
						} else {
								results.push(arr2[j])
								j++;
						}
				}
				while(i < arr1.length) {
						results.push(arr1[i])
						i++;
				}
				while(j < arr2.length) {
						results.push(arr2[j])
						j++;
				}
				return results;
		}

// Recrusive Merge Sort
		function mergeSort(arr){
				if(arr.length <= 1) return arr;
				let mid = Math.floor(arr.length/2);
				let left = mergeSort(arr.slice(0,mid));
				let right = mergeSort(arr.slice(mid));
				return merge(left, sright);
		}

		mergeSort([10,24,76,73])


```


## Big O of Merge Sort
| Time Complexity (Best) | Time Complexity (Average) | Time Complexity (Worst) | Space Complexity |
|-------------------------|---------------------------|-------------------------|------------------|
| O(n log n)              | O(n log n)                | O(n log n)              | O(n)             |

