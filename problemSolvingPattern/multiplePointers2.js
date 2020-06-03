/* 

count unique values chanllenge

implement a function called countUniqueValues, 
which accpets a sorted array, and counts the unique values in the array.
There can be negative numbers in the array, but it will always be sorted.

*/

function coltSolution(arr) {
  let left = 0;
  let right = 1;
  let count = 0;

  //   while (right < arr.length) {
  //     if (arr[left] !== arr[right]) {
  //       count++;
  //       left++;
  //       arr[left] = arr[right];
  //       right++;
  //     } else {
  //       right++;
  //     }
  //   }
  for (let j = 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    }
    console.log(i, j);
  }

  let result = arr.slice(0, left + 1);
  return [result, i + 1];
}

console.log(countUniqueValues([1, 1, 1, 1, 1, 2]));
console.log(countUniqueValues([1, 1, 1, 2, 2, 3]));
console.log(countUniqueValues([1, 1, 1, 2, 2, 3, 5, 5, 6]));
