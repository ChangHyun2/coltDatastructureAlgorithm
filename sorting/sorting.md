1. what is sorting?

rearranging the items in a collection so that the items are in some kind of order.

ex)
smallest to largest
sorting names alphabetically
sorting movies based on release year
sorting movies based on revenue


2. why do we need to learn sorting algorithm?

sorting is incredibly common task
there are many different ways to sort things, and different techniques have their own advantages and disadvantages.

3. built in javascript sort method

.sort() > 사전순 정렬 가능

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort

default는 item을 string으로 바꾼 후, 오름차순으로 UTF-16 code unit values의 순서 따라 정렬한다.
sort의 시공간복잡도는 실행되는 코드에 따라 달라진다.

`undefined`를 제외한 item은 string으로 변환되어 utf-16코드 순서에 따라 정렬된다.
`undefined`는 맨 끝으로 정렬된다.

Note : In UTF-16, Unicode characters above \uFFFF are encoded as two surrogate code units, of the range \uD800-\uDFFF. The value of each code unit is taken separately into account for the comparison. Thus the character formed by the surrogate pair \uD655\uDE55 will be sorted before the character \uFF3A.





sort method는 optional comparator function을 accept하며, comparator(a,b)의 return value에 따라 sort된다.
    음수를 return하면, a가 b 앞에,
    양수를 return하면, a가 b 뒤에 위치하게 된다.
    0을 return하면, a, b는 equal하며, 다른 elements에 의해 정렬될 수 있다.


```js
function compareByLen(a,b){
    return a.length-b.length;
}
['4444', '333', '666666', '1', '55555'].sort
(compareByLen);

// the array to be sorted
var list = ['Delta', 'alpha', 'CHARLIE', 'bravo'];

// temporary array holds objects with position and sort-value
var mapped = list.map(function(el, i) {
  return { index: i, value: el.toLowerCase() };
})

// sorting the mapped array containing the reduced values
mapped.sort(function(a, b) {
  if (a.value > b.value) {
    return 1;
  }
  if (a.value < b.value) {
    return -1;
  }
  return 0;
});

// container for the resulting order
var result = mapped.map(function(el){
  return list[el.index];
});

```

bubble sort : pair의 대소 비교 결과에 따라 매번 swap
selection sort : min값 찾아 array 앞으로 swap
  
https://yourbasic.org/algorithms/insertion-sort/
https://en.wikipedia.org/wiki/Insertion_sort#:~:text=Insertion%20sort%20is%20a%20simple,%2C%20heapsort%2C%20or%20merge%20sort.

quadratic sorting algorithms
- selection
- bubble
- insertion

insertion Sort

- 크기가 큰 list에서는 quick sort, heap sort, merge sort에 비해 크게 비효율적인 sorting방법이지만, 구현이 쉽고 단순한 sorting.
- 다른 quadratic sorting algorithms(O(n^2))에(selection, bubble) 비해 효율적임.
- small data set에서 효율적이며 일반적으로 다른 quadratic sort에 비해 성능이 좋다.
- adaptive
  - substantially sort된 data를 sort할 경우, 효율적임. 
  - sort된 item을 마주하게 될 경우, 곧바로 inner for문을 break하기 때문.
  - 만약 sorted position으로부터 k만큼 떨어진 곳에서 swap할 element가 위치할 경우, O(nk)가 됨.
- stable
  - 같은 key를 갖는 element가 있을 경우, element의 순서를 바꾸지 않음.
  - 'a'(1),'a'(2),'a'(3) >> 1,2,3이 유지됨.
- in-place
  - O(1)의 추가 메모리 공간(`temp`or`currentItem`)을 사용해 구현할 수 있음.
- 1 / 1,4 / 1,4,5 / 1,4,5,7 / 1,4,5,7,8 / 1,4,5,7,8,11 과 같이 순차적으로 sort된 조합이 필요할 경우 insertion sort를 사용하면 쉽게 구할 수 있음
  

Selection Sort

- 효율이 매우 안 좋아.
- 어떤 상황에서도 항상 n^2에 대해 매번 비교를 시행함.
- function이 종료될 떄 garbage collect가 발생할 경우, n개의 메모리 공간(minIndex를 저장할)이 필요함