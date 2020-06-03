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
  if (arr.length === 0) return null;
  for (let i = 0; i < arr.length - n + 1; i++) {
    let subMax = arr.slice(i, i + n).reduce((a, b) => a + b, 0);
    if (subMax > max) max = subMax;
  }
  return max;
}

function maxSubarraySum2(arr, n) {
  if (arr.length === 0) {
    return null;
  }
  if (arr.length === 1) {
    return Array.max(arr);
  }

  let subMax = [];
  for (let i = 0; i < n; i++) {
    subMax.push(arr[i]);
  }
  let left = 0;
  let right = n - 1;
  for (let i = 0; i < arr.length - n + 1; i++) {}
}

function colt(arr, n) {
  if (num > arr.length) {
    return null;
  }
  for (let i = 0; i < arr.length - n + 1; i++) {
    subMax = 0;
    for (let j = 0; j < num; j++) {
      subMax += arr[i + j];
    }
    if (subMax > max) max = subMax;
  }
  return max;
} // O(n^2)

function coltRefactor(arr, n) {
  let maxSum = 0;
  let tempSum = 0;
  if (arr.length < num) return null;

  for (let i = 0; i < num; i++) {
    maxSum += arr[i];
  }
  tempSum = maxSum;
  for (let i = num; i < arr.length; i++) {
    tempSum = tempSum - arr[i - num] + arr[i];
    maxSum = Math.max(maxSum, tempSum);
  }
  return maxSum;
}

console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 2));
console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 4));
console.log(maxSubarraySum([4, 2, 1, 6], 1));
console.log(maxSubarraySum([], 4));
