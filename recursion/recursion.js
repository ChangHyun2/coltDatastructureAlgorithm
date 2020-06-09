// base case : 재귀가 종료되는 조건

function countDown(num) {
  console.log(num);
  if (num === 0) {
    return;
  }
  countDown(num - 1);
}

countDown(10);

function sumRange(num) {
  if (num < 1) {
    throw new Error("invalid inputs");
  }

  if (num === 1) return 1;

  return num + sumRange(num - 1);
}
console.log(sumRange(10));

/*
sumRange(4)
         4 + sumRange(3)
                      3  + sumRange(2)
                                    2  +  sumRange(1)
                                                   1
*/

function factorial(n) {
  if (n === 1) return 1;
  return n * factorial(n - 1);
}

function factorial2(n) {
  let ans = 1;
  for (let i = n; i > 1; i--) {
    ans *= i;
  }
  return ans;
}
console.log(factorial(5), factorial2(5));

// helper function

/*
ex)
function collectOddValues(arr) {
  let result = [];

  function helper(input) {
    if (input.length === 0) {
      return;
    }
    if (input[0] % 2 === 0) {
      result.push(input[0]);
    }
    helper(arr.slice(1));
  }

  helper(arr);
  return result;
  // 왜 코드를 이렇게 짰을까..?
}
*/
function collectOddValues(arr) {
  let result = [];

  function helper(input) {
    if (input.length === 0) {
      return;
    }
    if (input[0] % 2 === 0) {
      result.push(input[0]);
    }
    helper(input.slice(1));
  }

  helper(arr);
  return result;
  // 왜 코드를 이렇게 짰을까..?
}

console.log(collectOddValues([1, 2, 3, 4, 1, 23, 21, 3, 232, 323, 32, 32]));
console.log("hello");
