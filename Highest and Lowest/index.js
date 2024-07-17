function highAndLow(numbers) {
  let arr = numbers.split(" ");

  let numberArr = arr.map((num) => +num);

  let sortedArr = numberArr.sort((a, b) => a - b);

  sortedArr.splice(1, sortedArr.length - 2);

  return sortedArr.reverse().join(" ");
}

console.log(highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4"));
