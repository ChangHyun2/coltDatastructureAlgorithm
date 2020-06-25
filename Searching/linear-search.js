/*

Objectives
- implement linear search on arrays
- implement binary search on sorted arrays
- implement a naive string searching algorithm
- implement the KMP string searching algorithm

Javascript has search!!

- indexOf
- includes
- find
- findIndex



*/

function linearSearch(arr, val) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === val) return i;
  }
  return -1;
}
console.log(linearSearch([1, 2, 3, 4, 6, 2, 32], 32));
console.log(linearSearch([1, 2, 3, 4, 6, 2, 32], 5));
