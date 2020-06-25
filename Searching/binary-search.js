/*

linear보다 훨씬 빨라.
but, sorted order에서만 사용 가능.
divde and conquer 방식을 사용.

best case : O(1)
worst case / average case : O(logN)

*/
function binarySearch(arr, n) {
  let left = 0;
  let right = arr.length - 1;
  let mid = Math.floor((left + right) / 2);

  while (left < right) {
    if (arr[mid] === n) return mid;

    if (arr[mid] > n) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }

    mid = Math.floor((left + right) / 2);
  }
  return arr[mid] === n ? mid : -1;
}
console.log(binarySearch([1, 2, 3, 5, 10, 22, 30, 42, 312], 2));
console.log(binarySearch([1, 2, 3, 5, 10, 22, 30, 42, 312], 1));
console.log(binarySearch([1, 2, 3, 5, 10, 22, 30, 42, 312], 3));
console.log(binarySearch([1, 2, 3, 5, 10, 22, 30, 42, 312], 5));
console.log(binarySearch([1, 2, 3, 5, 10, 22, 30, 42, 312], 312));
console.log(binarySearch([1, 2, 3, 5, 10, 22, 30, 42, 312], 42));
console.log(binarySearch([1, 2, 3, 5, 10, 22, 30, 42, 312], 30));
console.log(binarySearch([1, 2, 3, 5, 10, 22, 30, 42, 312], -1));
console.log(binarySearch([2, 3], 2));
console.log(binarySearch([2, 3, 4], 2));
console.log(binarySearch([2, 3, 4], 3));
console.log(binarySearch([2, 3, 4], 4));
console.log(binarySearch([2, 3, 4], -4));
console.log(binarySearch([2, 3], 3));
console.log(binarySearch([2, 3], -1));
console.log(binarySearch([2], 1));
console.log(binarySearch([2], 2));
