/*

# 문제해결법

- 문제 이해
- 예제 살피기
- break it down
- solve/simplify
- look back and refactor    

George Polya - how to solve it 참고

1. 문제를 이해하고, 내 문장으로 설명할 수 있는가?
2. input이 무엇인가?
3. output은 무엇인가?
4. output은 input으로부터 결정되는 값인가? (문제를 풀기 위해 충분한 정보(input)를 가지고 있는가?)
5. 중요한 data에 어떻게 label을 할 것인가?




## 문제 이해

ex 1) write a function which takes two numbers and returns their sum


1. 덧셈 결과를 반환하세요.
2. ints? floats? what about string for large numbers?
3. int? float? string?
4. yes

## 예제 살피기

1) 단순 예제로 시작
2) 더 복잡한 예제로
3) 입력이 없는 예제
4) invalid한 입력이 주어지는 예제

ex) write a functino which takes in a string and returns counts of each character in the string.

charCount("hello") => {'h':1, 'l':2, ...}

1) 'my phone number is 1231232' 숫자는? 공백은?
2) 'Hello hi'  대소문자 구분할 것인가
3) '' 입력이 없을 땐?
4) invalid한 입력이 주어질 땐?

### break it down

코드를 작성하기 전,
코드를 어떻게 작성할 것인지에 대해 생각해보기.

ex) charCode ( 전과 동일)

1st,
function charCount(str){
    /do something
    /return an object with keys that are lowercase alphanumeric characters in the string;
    /valuess should be the 
}
2nd,
function charCount(str){
    /make object to return at end
    /loop over string, for each character...
        /if the char is a number/letter AND is a key in object, add one to count
        /if the char is a number/letter AND not in object, add it and set value to 1
        /if character is something else (space, period, etc) don't do anything
    /return object at 
}

### solve or simplify

만약 해결이 되지 않는다면, simpler problem을 우선 해결해본다.

solve
or
simplify 
- 해결 과정에서 가장 어려운 내용이 무엇인지 찾는다.
- 우선 그 부분은 제외하고 
- 단순해진 문제에 대한 해결책을 써본다.
- 그 후, 본 문제를 풀어본다.

simplify
function charCount(str){
    /make object to return at end
    var result = {};
    /loop over string, for each character...
    for(let i=0; i<str.length; i++){
        let char = str[i];
            /if the char is a number/letter AND is a key in object, add one to count
        if(result[char] > 0){
            result[char]++;
            /if the char is a number/letter AND not in object, add it and set value to 1
        }else{
            result[char] = 1;
        }
    }
        /if character is something else (space, period, etc) don't do anything
    /return object at 
}
solve origin problem
function charCount(str){
    var result = {};
    for(let i=0; i<str.length; i++){
        let char = str[i].toLowerCase();
        if(result[char] > 0){
            result[char]++;
        }else{
            result[char] = 1;
        }
    }
    return result;
}

### Refactoring questions

- result가 올바르게 출력되는가?
- 다른 풀이법은?
- 한 번에 이해가 되는가?
- 재사용이 가능한가?
- solution에 대해 performance를 증가시키려면?
- refactor하는 다른 방법은?
- 다른 사람들은 어떻게 풀었을까?

1. sol1
function charCount(str){
    var obj = {};
    for(let char of str){
        char = char.toLowerCase();
        if(/[a-z0-9]/.test(char)){
            obj[char] = ++obj[char] || 1;
        }
    }
    return obj;
}

2. sol2

function isAlphaNumeric(char){
    let code = char.charCodeAt(0);
    if(!(code > 47 && code < 58)&&!(code > 64 && code < 91)!(code>96 && code <123){
        // numeric upper alph lower alph
        return false;
    }
    return true;
}

functino charCount(str){
    var obj = {};
    for(let char of str){
        if(isAlphaNumeric(char)){
            char = char.toLowerCase();
            obj[char] = ++obj[char] || 1;
        }
    }
    return obj;
}

### 정리

- understand the problem
- explore concrete examples
- break it down
- solve/simplify
- look back and refactor

*/
