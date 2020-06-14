function bubbleSort(arr, compareFunction = compare) {
  let swapped = false;

  for (let i = 1; i < arr.length; i++) {
    swapped = false;

    for (let j = 0; j < arr.length - i; j++) {
      // 0~5 1st 6
      // 0~4 2nd 5
      // 0~3 3rd 4
      // 0~2 4th
      if (compareFunction(arr[j], arr[j + 1]) > 0) {
        swap(arr, j, j + 1);
        swapped = true;
      }
    }

    if (!swapped) return arr;
  }
}

console.log(bubbleSort([1, 2, 3, 4, 1, 2, 3, 2321]));

function compare(a, b) {
  if (a === b) {
    return 0;
  }

  return a < b ? -1 : 1;
}

function descend(a, b) {
  if (a > b) return -1;
  if (a < b) return 1;
  return 0;
}
function ascend(a, b) {
  if (a < b) return -1;
  if (a > b) return 1;
  return 0;
}

function swap(arr, i1, i2) {
  [arr[i1], arr[i2]] = [arr[i2], arr[i1]];
}
