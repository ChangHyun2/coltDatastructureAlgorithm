let values = [true, {}, [], 2, "awesome"];
let names = ["ab", "cd", "ef"];

// 만약 순서가 필요없다면, linked-list를 사용하는 게 더 유리하고 퍼포먼스에 좋다.

/*
when to use arrays?
1) when you need order
2) when you need fast access
3) insertion and removal(sort of...)

big O of array
1. insertion : it depends...
2. removal : it depends...
searching : O(n)
access : O(1)

big O of array operations
1. push/pop : O(1)
2. shift/unshift : O(n)
3. concat : O(n)
4. slice : O(n)
5. splice : O(n)
6. sort : O(n*logN)
7. forEach/map/filter/reduce/etc : O(n)

순서가 존재할 경우 array는 object보다 유리하다.
하지만, remove, add가 빈번하게 발생하는 상황에서는 object가 유리하다.
array에서 item을 remove하거나 배열 앞 쪽에 item을 add할 경우, 뒤에 위치한 item 대한 indexing이 필요하기 때문이다.

bigO notation은 항상 최악의 상황을 가정하고 계산한다.

*/
