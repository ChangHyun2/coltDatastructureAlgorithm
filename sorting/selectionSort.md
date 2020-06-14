Selection Sort

similar to bubble sort.
instead of first placing large values into sorted position, it places small values into sorted position.

bubble처럼 매번 swap을 해주는 게 아니라,
최소값을 변수로 재할당하고, 
최소값을 arr 앞쪽 index와 swap하는 방식

5,3,4,1,2
  look 3,4,1,2 >> minimum : 1
  swap arr[0], arr[3] (minimum)
1,3,4,5,2
    look 4,5,2 >> minimum : 2
    swap arr[1], arr[4]
1,2,4,5,3
      look 5,3 >> minimum : 3
      swap arr[2], arr[4]
1,2,3,4,5
      look 4,5 >> minimum : 4

BigO 

n-1 + n-2 + n-3 + ... + 1
O(n^2)

모든 상황에서 동일하게 for문의 각 조합을 모두 거치게 됨.
상당히 느린 sort

worst & best & average : O(n^2) comparisons, o(n) swaps
