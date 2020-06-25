/*



*/

const naiveSearch = {
  findIndex(long, short) {
    for (let i = 0; i < long.length; i++) {
      let find = true;

      for (let j = 0; j < short.length; j++) {
        if (long[i + j] !== short[j]) {
          find = false;
          break;
        }
      }

      if (!find) continue;
      return i;
    }
    return -1;
  },

  countString(long, short) {
    const shortLength = short.length;
    let count = 0;
    for (let i = 0; i < long.length; i++) {
      for (let j = 0; j < shortLength; j++) {
        if (long[i + j] !== short[j]) break;
        if (j === shortLength - 1) {
          count += 1;
          i += shortLength - 1;
        }
      }
    }
    return count;
  },
};

console.log(naiveSearch.findIndex("hello everybody nice to meet you", "lsdfd"));
console.log(
  naiveSearch.countString("hello lelhleleleleh ehleh e lehele", "el")
);
