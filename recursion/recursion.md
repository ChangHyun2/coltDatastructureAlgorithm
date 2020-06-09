# recursion

## 1. what is recursion?

- a process(function) that calls itself

### 1.1 Example
- JSON.parse / JSON.stringify : often written recursively
- document.getElementById and DOM traversal algorithms
- Object traversal
- see it with more complex data structure
- sometimes a cleaner alternative to iteration

## 2. call stack

- stack data structure
- function을 재귀로 계속해 call할 경우, maxmium call stack 내에서 함수가 value를 return해야한다.

'''js
let i=0;
function hello(){
    console.log(i++);
    return hello();
}
// 실행 결과 12573까지 출력되었다. 
'''

```js
//from https://2ality.com/2014/04/call-stack-size.html
    function computeMaxCallStackSize() {
        try {
            return 1 + computeMaxCallStackSize();
        } catch (e) {
            // Call stack overflow
            return 1;
        }
    }
```

## 3. Where things go wrong

- no base case
- forgetting to return or returning the wrong thing
- stack overflow

```js
// forgetting to return
function facto(n){
    if(n===1) console.log(n);
    return n * facto(n-1);
}
```

## 4. helper method recursion

```js
function outer(input){
    var outerScopedVariable = [];

    function helper(helperInput){
        //modify the outherScopedVariable
        helper(helperInput--)
    }

    helper(input)
    return outerScopedVariable;
}
```

## 5. Recursion tips

For arrays, use slice, the spread operator, concat (make copies > don't mutuate them)
For strings, use slice, substr, substring to make copies of strings (make copies > because strings are immutable)
For objects, use Object.assign, or the spread operator