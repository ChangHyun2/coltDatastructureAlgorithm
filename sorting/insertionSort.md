1. insertion Sort

index를 기준으로 앞 쪽에 항상 sorted sequence를 둠.

**5**,3,4,1,2              index : 1
**3**,**5**,4,1,2          index : 2
**3**,**4**,**5**,1,2      index : 3

2. Big O

best : O(n) comparisons, O(1) swaps
worst : O(n^2) comparisons, swaps
Average : O(n^2) comparisons, swaps
