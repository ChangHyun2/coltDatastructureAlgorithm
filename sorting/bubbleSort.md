BubbleSort(sinking sort)

    가장 큰 값이 top(더 높은 index)으로 bubble!
    교육 목적으로 배움.
    
swap
```js
function swap(arr, idx1, idx2){
    const temp = arr[idx1];
    arr[idx1] = arr[idx2];
    arr[idx2] = temp;
}

const swap = (arr, i1, i2) => {
    [arr[i1], arr[i2]] = [arr[i2],arr[i1]];
}
```

swap flag
```js
for(let i=1; i<arr.length; i++){
    let isSwapped = false;
    for(let j=0; j<arr.length-i; j++){
        if(arr[j] > arr[j+1]){ do swap
        // 만약 do swap이 inner for문에서 발생하지 않을 경우,
        // 더 이상 sort할 내용이 없음.
        isSwapped = true;
        // 스왑 발생 시, true를 반환
        // 발생하지 않을 시, outer의 false값에 의해 아래 조건에서 arr를 return하고 nested for문을 종료
        }
    }
    if(!isSwapped){
        return arr;
    }
}
``` 

Big O

best : O(n) comparison, O(1) swaps : isSwapped가 이른 시점에 false가 될 경우 (더 이상 swap할 내용이 없을 때): O(n)
( ex) n-1 + n-2 + n-3)가 되기 때문. 
worst : O(n^2) comparisons, O(n^2) swaps 
average performance : O(n^2) comparisons, O(n^2) swaps





