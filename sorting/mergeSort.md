Intermediate Sorting Algorithms

    improve time complexity O(n^2) to O(nlogn)
    efficiency <> simplicity

```js
var data = Array.apply(null, {length: 100000}).map(Function.call, Math.random);
mergeSort(data)
// too long!
```

Merge Sort

- merging + sorting
- length가 0 or 1인 array는 항상 sorted 
- array를 작은 단위로 쪼개어, 새로운 sorted array를 만듦

```js
               32,2,16,2,8,4,38
        32,2,16,2               8,4,38
   32,2          16,2        8,4       38
 2     32      2     16    8     4     38
   2,32          2,16        4,8       38
        2,2,16,32               4,8,38
               2,2,4,8,16,32,38
```

```js
function merge(arr1, arr2){
    const merged = [];
    let i=0;
    let j=0;
    while(i<arr1.length && j<arr2.length){
        if(arr[i]>=arr2[j]){
            merged.push(arr[i]);
            i++;
        }else{
            merged.push(arr[j]);
            j++;
        }
    }
    while(i<arr1.length){
        merged.push(arr1[i])
    }
    while(j<arr2.length){
        merged.push(arr2[j])
    }
    return merged;
}
```