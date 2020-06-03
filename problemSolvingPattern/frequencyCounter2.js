// Anagram chanllenge
// 철자 바꾸기

// given two strings, write a function to determine if the second string is an anagram of the first.
// An anagram is a word, pharse, or name formed by rearranging the letters of another, such as cinema, formed from iceman.

function validAnagram(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }
  let countLetter = {};

  for (let i = 0; i < str1.length; i++) {
    // O(n)
    countLetter[i] ? (countLetter[i] += 1) : (countLetter[i] = 1);
  }

  for (let i = 0; i < str2.length; i++) {
    // O(n)
    if (!countLetter[i]) {
      return false;
    }
    countLetter[i] -= 1;
  }

  return true;
}
