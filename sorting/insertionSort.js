function insertionSort(arr) {
  let temp = 0;
  for (let i = 1; i < arr.length; i++) {
    temp = arr[i];
    for (let j = i - 1; j >= 0; j--) {
      if (temp < arr[j]) {
        // swap조건만족 시
        arr[j + 1] = arr[j];
        if (j === 0) arr[j] = temp;
      } else {
        arr[j + 1] = temp;
        break;
      }
    }
  }
  return arr;
}

function swap(arr, j, k) {
  [arr[j], arr[k]] = [arr[k], arr[j]];
}

function compare(a, b) {
  if (a > b) return 1;
  if (a < b) return -1;
  if (a === b) return 0;
}
console.log(insertionSort([2, 1, 9, 76, 4]));

// length가 100000인 data만드는 방법
var data = Array.apply(null, { length: 100000 }).map(
  Function.call,
  Math.random
);

console.log(insertionSort(data));
