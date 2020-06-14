arr = [1, 2, 3, 45, 2, 3, 4, 2, 35, 3, 2];
console.log(selectionSort(arr));

function swap(arr, i, j) {
  return ([arr[i], arr[j]] = [arr[j], arr[i]]);
}

function selectionSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let minIndex = i;

    for (let j = i + 1; j < arr.length; j++) {
      arr[minIndex] > arr[j] && (minIndex = j);
    }
    // compare function이 없어도 돼!
    i !== minIndex && swap(arr, i, minIndex);
  }
  return arr;
}
