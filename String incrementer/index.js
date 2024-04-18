// Your job is to write a function which increments a string, to create a new string.

// If the string already ends with a number, the number should be incremented by 1.
// If the string does not end with a number. the number 1 should be appended to the new string.
// Examples:

// foo -> foo1

// foobar23 -> foobar24

// foo0042 -> foo0043

// foo9 -> foo10

// foo099 -> foo100

// Attention: If the number has leading zeros the amount of digits should be considered.

function incrementString(string) {
  let charArr = string.split("");
  let param = string;

  for (let i = 0; i <= charArr.length - 1; i++) {
    if (isNaN(charArr[i])) {
      if (i === charArr.length - 1) {
        return param + "1";
      }
      continue;
    }
    let string = charArr.slice(0, i).join("");
    let number = charArr.slice(i, charArr.length).join("");
    let numberLength = number.length;
    let newNumber = +number + 1;
    let numberOfZeros = numberLength - newNumber.toString().length;

    if (numberOfZeros < 0) {
      return string + newNumber;
    }
    return string + "0".repeat(numberOfZeros) + newNumber;
  }
}

console.log(incrementString("foobar99"));
