/* ## Frequency counter

    uses objects or sets to collect values/frequency of values
    avoid the need for nested loops or O(n^2) operations with arrays/strings

    ex_1

    function called same, which accepts two arrays.

    return true if evey value in the array has it's corresponding value squared in the second array.
    the frequency of values must be the same.

    - 문제 이해

    2개의 array를 입력으로 받아 array2에 있는 모든 item의 루트값이 array1의 item value와 매칭될 경우 true를 반환.
    또한, 각 array가 매칭되는 value를 포함하는 개수는 서로 같아야 한다.

    - 예제 살피기

    [1,2,3,4] [1,4,9,16] true
    [4,2,1,3] [4,16,9,1] true
    [1,2,3,4] [1,4,4,9,16] false
    [1,2,3,4] [1,4,9,16,25] false

*/

function isSquared(arr1, arr2) {
  //arr1, arr2 길이를 체크. 다를 경우 false
  //같을 경우, sort 후, arr1 각 item을 제곱해 arr2와 비교

  if (arr1.length !== arr2.length) {
    return false;
  }

  arr1.sort(); // O(nlogn)
  arr2.sort();

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] * arr[i] !== arr2[i]) return false;
  } // O(n)

  return true;
} // O(nlogn) (sort)

function isSquared(arr1, arr2) {
  //arr1, arr2 길이를 체크. 다를 경우 false
  //같을 경우, arr1,2를 hashTable로 변환.
  //변환된 hashTable을 values arr로 바꾼 후, 비교

  let obj1 = {};
  let obj2 = {};

  for (let i = 0; i < arr1.length; i++) {
    const doubled = arr1[i] * arr1[i];
    obj1[doubled] = ++obj1[doubled] || 1;

    obj2[arr2[i]] = ++obj2[arr2[i]] || 1;
  } //o(n)

  for (key in obj1) {
    if (!(key in obj2)) return false;
    if (obj1[key] !== obj2[key]) return false;
  } //o(n)

  return true;
} //o(n)

function coltNaiveIsSquare(arr1, arr2) {
  // 길이를 체크하고,
  // arr1의 item을 순회하며 arr2에서 index를 찾아 arr2에 있는 값일 경우,
  // arr2에서 제거
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    let correctIndex = arr2.indexOf(arr1[i] ** 2); // O(n^2)
    if (correctIndex === -1) {
      return false;
    }
    arr2.splice(correctIndex, 1); //O(n^2)
  }
  return true;
} //o(n^2)

function coltIsSquare(arr1, arr2) {
  // 길이를 체크하고,
  // arr1의 item을 순회하며 arr2에서 index를 찾아 arr2에 있는 값일 경우,
  // arr2에서 제거
  if (arr1.length !== arr2.length) {
    return false;
  }
  let frequencyCounter1 = {};
  let frequencyCounter2 = {};
  for (let val of arr1) {
    frequencyCounter1[val] = (frequencyCounter1[val] | 0) + 1;
  }
  for (let val of arr2) {
    frequencyCounter2[val] = (frequencyCounter2[val] | 0) + 1;
  }

  for (let key in frequencyCounter1) {
    if (!(key ** 2 in frequencyCounter2)) {
      return false;
    }
    if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
      return false;
    }
  }

  return true;
} // O(n)
