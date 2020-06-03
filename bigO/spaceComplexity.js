/* 

time Complexity : 입력의 크기가 증가할 때, 알고리즘의 **runtime**을 어떻게 analyze할까?

space Complexity : 알고리즘을 통해 code를 실행하기 위해, 얼마나 많은 memory가 필요한가?


auxiliary space complexity : 알고리즘에 필요한 space를 의미하며, 입력에 의해 차지되는 공간을 의미하지 않는다.
space complexity는 통상적으로 auxiliary space complexity를 의미한다.

space complexity rules of thumb

1. boolean, number, undefiend, null은 constant space.
2. string은 O(n) why? char 하나가 1 constant space이므로,
3. reference type도 O(n). array(n[length]) object(n[keys]) 
4. 

*/

function sum(arr) {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  return total;
}
// O(1) (total : 1, i : 1)

function double(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(2 * arr[i]);
  }
  return newArr;
}
// O(n)
