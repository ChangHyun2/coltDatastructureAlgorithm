function mergeSort(arr) {
  if (arr.length < 2) {
    return arr;
  }
  let mid = Math.floor(arr.length / 2);
  let left = arr.slice(0, mid);
  let right = arr.slice(mid);

  return merge(mergeSort(left), mergeSort(right));
}

function merge(arr1, arr2) {
  const merged = [];
  let i = 0;
  let j = 0;
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] > arr2[j]) {
      merged.push(arr2[j]);
      j++;
    } else {
      merged.push(arr1[i]);
      i++;
    }
  }
  while (i < arr1.length) {
    merged.push(arr1[i]);
    i++;
  }
  while (j < arr2.length) {
    merged.push(arr2[j]);
    j++;
  }
  return merged;
}
console.log(merge([1, 4, 7, 9], [1, 2, 44, 64, 77, 124]));
console.log(merge([1, 2, 4, 7, 9], [1, 2, 4, 6, 8, 124]));
console.log(
  mergeSort(
    Array(1000000)
      .fill(0)
      .map((i) => Math.random())
  )
);
