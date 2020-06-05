/*
Simplifying Big O Expressions

1) constants don't matter 
O(2n) > O(n)
O(500) > O(1)

2) smaller Terms don't matter
O(n+10) > O(n)
O(1000n+50) > O(n)
O(n^2 + 5n + 8) > O(n^2)

3) big O shorthands
1. 산술 연산은 input의 size와 관계 없이 constant time
2. 변수 할당 또한 constant
3. 배열 또는 객체의 element에 접근하는 것도 constant
4. loop에서, 복잡도는 loop의 횟수이며, loop 내에서 어떤 수행하는지는 셈하지 않는다.
*/

function logAtLeast5(n) {
  for (let i = 1; i <= Math.max(5, n); i++) {
    console.log(i);
  }
}
// O(n)

function logAtLeast5(n) {
  for (let i = 1; i <= Math.min(5, n); i++) {
    console.log(i);
  }
}
// O(1)

function subtotals(array) {
  var subtotalArray = Array(array.length);
  for (var i = 0; i < array.length; i++) {
    var subtotal = 0;
    for (var j = 0; j <= i; j++) {
      subtotal += array[j];
    }
    subtotalArray[i] = subtotal;
  }
  return subtotalArray;
}

// O(n(n+1)/2) > O(n^2)
