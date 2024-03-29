## hash1 function

function hash1(key, arrayLen){
    let total = 0;
    for(let char of key){
        let value = char.charCodeAt(0) - 96
        total = (total + value) % arrayLen;
    }
    return total;
}

## hash1 problem
    only hashes strings
    not constant time - linear in key length
    could be a little more random

## hash2 function

function hash2(key, arrayLen){
    let total = 0;
    let WEIRD_PRIME = 31; // 13, 7 ...
    for(let i=0; i<Math.min(key.length, 100); i++){ // 100보다 클 경우 break;
        let char = key[i];
        let value = char.charCodeAt(0)-96;
        total = (total * WEIRD_PRIME+value)%arrayLen;
    }
    return total;
} 

## Prime numbers?

    the prime number is helpful in spreading out the keys more uniformly
    also helpful if the array that you're putting values into has a prime length
    you don't need to know why.(Math is complicated)

## collision

    even with a large array and a great hash function, collisions are inevitable
    여러 strategies 중, 두 가지를 살펴봄
    
    1. separate chaining
          array의 각 index에 곧바로 value를 저장하는 것이 아닌, sophisticated data structure를 저장.
          (e.g. an array or a linked list)
          hash값이 같을지라도(같은 index일지라도) 해당 인덱스에 서로 다른 key-value 쌍을 저장할 수 있게 해줌.
          [0,1,2,3,4,[['darkblue', '#00009b'], ['salmon', '#fa8072']],6,7,8]
          hash값이 5인 자리에 array를 사용해 value가 같더라도 구분이 가능해짐.
    2. linear probing
         when we find a collision, we search through the array to find the next empty slot
         unlike separate chaining, store a single key-value at each index.
         {key1, value1},{key2, value2},{key3, value3}가 서로 같은 hash값을 가질 경우,
         obj2의 해시값을 hash+1,
         obj3는 hash+2로 변경해 index 충돌을 방지
         만약 같은 인덱스에서 충돌이 다량 발생할 경우, index를 계속해서 증가시켜야 됨.
         
         
## Big O

    insert : O(1)
    deletion : O(1)
    Access: O(1)

    insert, deletion O(1) ??
        만약, items 수에 비해 bucket의 수가 적거나,
        각 bucket에 고르게 items가 분배되지 않을 경우에는 O(n)에 가까워진다.
        하지만, 이상적인 hash table이 설계된 상황이라면 
        item이 각 bucket에 고르게 분포해, 
        hash function O(1)
        find item in bucket O(1)
        결과적으로 O(1)이 된다.

## Recap

collections of key-value pairs
can find values quickly given a key
can add new key-values quickly
store data in a large array, and work by hashing the keys
good hash should be fast, distribute keys uniformly, and be deterministic
separate chaining and linear probing are two strategies when collision is occured.
