// Given a positive number n > 1 find the prime factor decomposition of n. The result will be a string with the following form :

//  "(p1**n1)(p2**n2)...(pk**nk)"
// with the p(i) in increasing order and n(i) empty if n(i) is 1.

// Example: n = 86240 should return "(2**5)(5)(7**2)(11)"

function primeFactors(n) {
  let multipiers = [];
  var temp = n;
  for (let i = 2; i <= n; ) {
    if (temp % i === 0) {
      multipiers[i] = multipiers[i] == null ? 1 : multipiers[i] + 1;
      temp = temp / i;
    } else {
      i++;
      n = temp;
    }
  }
  if (multipiers.length === 0) {
    return `(${n})`;
  }
  let expression = "";
  for (let i = 0; i < multipiers.length; i++) {
    if (multipiers[i] > 0) {
      expression += `(${i}${multipiers[i] > 1 ? `**${multipiers[i]}` : ""})`;
    }
  }
  return expression;
}

function isPrime(number) {
  if (number < 2) {
    return false;
  }
  for (let i = 2; i < Math.sqrt(number); i++) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
}
