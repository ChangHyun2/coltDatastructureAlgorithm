/* index를 pointer에 저장해 사용.

minimal space complexity를 요구하는 problem에서 유리한 방법.

ex) write a function called sumZero which accepts a sorted array of integers. 
    The function should find the first pair where the sum is 0.
    Return an array that includes both values that sum to zero or undefined if a pair does not exist.
*/

function sumZero(arr) {
  // arr item을 덧셈해, 0이 되는 first pair를 리턴.
  // 0이 되지 않을 경우에는, undefined를 리턴.
  // ex) -3, -2, -1, 0, 1, 2, 3 >> [-3, 3]
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === -arr[j]) return [arr[i], arr[j]];
    }
  }
  return undefined;
}

function sumZero(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === 0) {
        return [arr[i], arr[j]];
      }
    }
  }
} // time : O(n^2)(?) space : O(1)

function sumZero(arr) {
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    let sum = arr[left] + arr[right];
    if (sum === 0) {
      return [arr[left], arr[right]];
    } else if (sum > 0) {
      right--;
    } else {
      left++;
    }
  }
} // time: O(n) space : O(1)
