// Complete the function scramble(str1, str2) that returns true if a portion of str1 characters can be rearranged to match str2, otherwise returns false.

// Notes:

// Only lower case letters will be used (a-z). No punctuation or digits will be included.
// Performance needs to be considered.
// Examples
// scramble('rkqodlw', 'world') ==> True
// scramble('cedewaraaossoqqyt', 'codewars') ==> True
// scramble('katas', 'steak') ==> False

function scramble(str1, str2) {
  const strCount = {};

  for (let str of str1) {
    strCount[str] = (strCount[str] || 0) + 1;
  }

  for (let str of str2) {
    if (!strCount[str]) {
      return false;
    }
    strCount[str]--;
  }

  return true;
}

console.log(scramble("cedewaraaossoqqyt", "codewars"));
