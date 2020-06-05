/*

slidingWindow
    creating a window which can either be an array or number from one position to another
    depending on a certain condition, the window either increases or closes(and a new window is created)
    very useful for keeping track of a subset of data in an array/string etc.

    
ex) 
write a function called maxSubarraySum which accepts an array of integers and a number called n.
the function should calculate the maximum sum of n consecutive elements in the array.
[1,2,5,2,8,1,5],2 >> 10
*/

function maxSubarraySum(arr, n) {
  let max = 0;

  if (arr.length < n) {
    return null;
  }

  for (let i = 0; i < arr.length - n + 1; i++) {
    let subMax = arr.slice(i, i + n).reduce((a, b) => a + b, 0);
    if (subMax > max) max = subMax;
  } // O(n^3) for , slice , reduce
  return max;
}

function maxSubarraySum2(arr, n) {
  if (arr.length < n) {
    return false;
  }

  let max = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    slideMax = 0;

    for (let j = 0; j < n; j++) {
      slideMax += arr[j + i];
    }

    max = Math.max(max, subMax);
  }

  return max;
} // O(n^2)

function maxSubarraySum3(arr, n) {
  if (arr.length < n) {
    return null;
  }

  let subMax = 0;
  for (let i = 0; i < n; i++) {
    subMax += arr[i];
  }

  let slide = subMax;

  for (let i = n; i < arr.length; i++) {
    const diff = arr[n] - arr[i - n];

    slide += diff;

    subMax = Math.max(slide, subMax);
  }

  return submax;
} // O(n)

console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 2));
console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 4));
console.log(maxSubarraySum([4, 2, 1, 6], 1));
console.log(maxSubarraySum([], 4));
