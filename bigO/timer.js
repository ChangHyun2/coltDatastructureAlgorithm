// 브라우저에서, 측정 가능
let t1 = performance.now();
addUpTo2(10000);
let t2 = performance.now();
console.log(t2 - t1);

// But, 위와 같이 time을 측정하는 방식은 브라우저마다 다름.
// 만약, 알고리즘 수행 시간이 충분히 긴 경우라면 time을 측정하는 것이 유의미한 결과라 볼 수 있지만,
// 시간이 짧은 경우 시간과 퍼포먼스는 브라우저와 device에 따라 다르기 마련임.

// time이 부정확한 측정 결과라면 무엇을 통해 더 좋은 알고리즘을 판별할 수 있을까?

// 컴퓨터가 수행하는 simple operation의 횟수를 측정하자! >> big O notation
