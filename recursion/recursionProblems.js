function power(num, nth) {
  if (nth < 1) return 1;

  return num * power(num, nth - 1);
}

function factorial(n) {
  if (n < 2) return 1;

  return n * factorial(n - 1);
}

function productOfArray(arr) {
  if (!arr.length) return 1;
  return arr[0] * productOfArray(arr.slice(1));
}

function recursiveRange(n) {
  if (!n) return 0;

  return n + recursiveRange(n - 1);
}

function reverse(str) {
  // add whatever parameters you deem necessary - good luck!
  if (!str) return "";
  return str.slice(1) + str[0];
}
function isPalindrome(str) {
  if (str.length < 2) {
    return true;
  }

  return str.charAt(0) === str.charAt(str.length - 1)
    ? isPalindrome(str.substring(1, str.length - 1))
    : false;
}

const isOdd = (val) => val % 2 !== 0;
function someRecursive(arr, isFunc) {
  if (arr.length === 0) return true;
  if (isFunc(arr.pop())) {
    return someRecursive(arr, isFunc);
  }
  return false;
}

//flatten
function flatten(arr) {
  const flatted = [];

  const peel = (arr) =>
    arr.forEach((item) => (item.length ? peel(item) : flatted.push(item)));

  peel(arr);
  return flatted;
}

// capitalizeFirst
function capitalizeFirst(arr) {
  return arr.map((str) => str[0].toUpperCase() + str.slice(1));
}
// console.log(capitalizeFirst(["car", "taco", "banana"])); // ['Car','Taco','Banana']

// nextedEvenSum
function nestedEvenSum(obj) {
  let sum = 0;
  const addEven = (obj) =>
    Object.values(obj).forEach((value) =>
      typeof value !== "object"
        ? value % 2 === 0 && (sum += value)
        : addEven(value)
    );
  addEven(obj);
  return sum;
}

// var obj1 = {
//   outer: 2,
//   obj: {
//     inner: 2,
//     otherObj: {
//       superInner: 2,
//       notANumber: true,
//       alsoNotANumber: "yup",
//     },
//   },
// };

// var obj2 = {
//   a: 2,
//   b: { b: 2, bb: { b: 3, bb: { b: 2 } } },
//   c: { c: { c: 2 }, cc: "ball", ccc: 5 },
//   d: 1,
//   e: { e: { e: 2 }, ee: "car" },
// };
// nestedEvenSum(obj1); // 6
// nestedEvenSum(obj2); // 10

function capitalizeWords(arr) {
  return arr.map((i) => i.toUpperCase());
}

let words = ["i", "am", "learning", "recursion"];
console.log(capitalizeWords(words));

function stringifyNumbers(obj) {
  const entries = Object.entries(obj);
  entries.forEach((entry) => {
    const [key, value] = entry;
    if (typeof value === "object") {
      stringifyNumbers(obj[key]);
    } else {
      if (typeof value === "number") {
        obj[key] = value.toString();
      }
    }
  });
  return obj;
}

// let obj = {
//   num: 1,
//   test: [],
//   data: {
//     val: 4,
//     info: {
//       isRight: true,
//       random: 66,
//     },
//   },
// };

// console.log(stringifyNumbers(obj));

/*
{
    num: "1",
    test: [],
    data: {
        val: "4",
        info: {
            isRight: true,
            random: "66"
        }
    }
}
*/

function collectStrings(obj) {
  const stack = [];

  const getString = (obj) => {
    Object.entries(obj).forEach((entry) => {
      const [key, value] = entry;

      typeof value === "object" && getString(obj[key]);
      typeof value === "string" && stack.push(value);
    });
  };

  getString(obj);

  return stack;
}

const obj = {
  stuff: "foo",
  data: {
    val: {
      thing: {
        info: "bar",
        moreInfo: {
          evenMoreInfo: {
            weMadeIt: "baz",
          },
        },
      },
    },
  },
};

console.log(collectStrings(obj)); // ["foo", "bar", "baz"])

/*

Recursion CHALLENGE Problem Set Solutions Part 2
capitalizeWords Solution

function capitalizeWords (array) {
  if (array.length === 1) {
    return [array[0].toUpperCase()];
  }
  let res = capitalizeWords(array.slice(0, -1));
  res.push(array.slice(array.length-1)[0].toUpperCase());
  return res;
 
}
nestedEvenSum Solution

function nestedEvenSum (obj, sum=0) {
    for (var key in obj) {
        if (typeof obj[key] === 'object'){
            sum += nestedEvenSum(obj[key]);
        } else if (typeof obj[key] === 'number' && obj[key] % 2 === 0){
            sum += obj[key];
        }
    }
    return sum;
}
capitalizeFire Solution

function capitalizeFirst (array) {
  if (array.length === 1) {
    return [array[0][0].toUpperCase() + array[0].substr(1)];
  }
  const res = capitalizeFirst(array.slice(0, -1));
  const string = array.slice(array.length - 1)[0][0].toUpperCase() + array.slice(array.length-1)[0].substr(1);
  res.push(string);
  return res;
}
stringifyNumbers Solution

function stringifyNumbers(obj) {
  var newObj = {};
  for (var key in obj) {
    if (typeof obj[key] === 'number') {
      newObj[key] = obj[key].toString();
    } else if (typeof obj[key] === 'object' && !Array.isArray(obj[key])) {
      newObj[key] = stringifyNumbers(obj[key]);
    } else {
      newObj[key] = obj[key];
    }
  }
  return newObj;
}
collectStrings Solution: Helper Method Recursion Version

function collectStrings(obj) {
    var stringsArr = [];
 
    function gatherStrings(o) {
        for(var key in o) {
            if(typeof o[key] === 'string') {
                stringsArr.push(o[key]);
            }
            else if(typeof o[key] === 'object') {
                return gatherStrings(o[key]);
            }
        }
    }
 
    gatherStrings(obj);
 
    return stringsArr;
}
collectStrings Solution: Pure Recursion Version

function collectStrings(obj) {
    var stringsArr = [];
    for(var key in obj) {
        if(typeof obj[key] === 'string') {
            stringsArr.push(obj[key]);
        }
        else if(typeof obj[key] === 'object') {
            stringsArr = stringsArr.concat(collectStrings(obj[key]));
        }
    }
 
    return stringsArr;
}
*/
