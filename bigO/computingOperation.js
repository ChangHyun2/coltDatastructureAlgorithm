function addUpTo(n) {
  return (n * (n + 1)) / 2;
}

// 1 multi, 1 add, 1 division >> 3

function addUpTo2(n) {
  let total = 0; // 1 assign
  for (let i = 1; i <= n; i++) {
    // 1assign , n comparision / n addition/n assign
    total += i; // n addition , n assign
  }
  return total;
}
// 1 assignment 1 assignment  n addition and n assignment n add >> n

function countUpAndDown(n) {
  console.log("going up!");
  for (let i = 0; i < n; i++) {
    console.log(i);
  }
  for (let j = n - 1; j > 0; j--) {
    console.log(j);
  }
}

/*

위와 같은 fuzzy한 counting을 formalize하는 방법이 big O notation.
n이 증가할 떄, 컴퓨터가 수행하는 단순 연산의 횟수가 f(n)의 상수배보다 작을 경우, O(f(n))으로 표기한다.
f(n)이 linear(n)일 수도, quadratic(n^2)일 수도, constant(1)일 수도 있음.

n이 증가할 때, runtime이 증가하는 양상 , upperbound

addUpTo2는 n의 배수에 바운드 된다. so, O(n)으로 표기.

*/
