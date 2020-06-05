/*

Divide and Conquer (분할 정복법)
    dividing a data set into smaller chunks and then repeating a process with a subset of data
    
    this pattern can tremendously decrease time complexity


ex)

given a sorted array of integers, 
write a function called search,
that accepts a value and returns the index where the value passed to the function is located.
if the value is not found, return -1

[1,2,3,4,5,6] , 4 >> 3
[1,2,3,4,5,6] , 6 >> 11
*/

function search1(arr, n) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === n) return i;
  }
  return -1;
} //O(n)

function search2(arr, n) {
  let left = 0;
  let right = arr.length - 1;
  let mid = Math.floor((left + right) / 2);
  let result = -1;
  while (left !== mid) {
    if (arr[mid] === n) {
      result = mid;
    }
    if (arr[mid] < n) {
      left = mid;
      mid = Math.floor((left + right) / 2);
      if (arr[mid + 1] === n) return mid + 1;
    } else {
      right = mid;
      mid = Math.floor((left + right) / 2);
      if (arr[mid - 1] === n) return mid - 1;
    }
  }
  return result;
}

function search3(arr, n) {
  let left = 0;
  let right = arr.length - 1;
  let mid = null;

  while (left !== right) {
    console.log(hi);
    mid = Math.floor((left + right) / 2);
    if (arr[mid] < n) {
      left = mid + 1;
    } else if (arr[mid] > n) {
      right = mid - 1;
    } else {
      return mid;
    }
  }
  return -1;
}

function colt(arr, n) {
  let min = 0;
  let max = array.length - 1;

  while (min <= max) {
    let middle = Math.floor((min + max) / 2);
    let currentElement = array[middle];

    if (array[middle] < n) {
      min = middle + 1;
    } else if (array[middle] > n) {
      max = middle - 1;
    } else {
      return middle;
    }
  }
  return -1;
} //O(logn)

search([1, 2, 3, 4, 5, 6], 4);
console.log(search3([1, 2, 3, 4, 5, 6], 4));
console.log(search3([1, 2, 3, 4, 5, 6], 4));
console.log(search3([1, 2, 3, 4, 5, 6], 6));
console.log(search3([1, 2, 3, 4, 5, 6], 11));
console.log(search3([1, 2, 3, 4, 5, 6], 1));
