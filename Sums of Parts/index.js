export function partsSums(ls) {
  const sumArr = [];
  let sum = ls.reduce((a, b) => a + b, 0);
  sumArr.push(sum);

  ls.forEach((element) => {
    sum -= element;
    sumArr.push(sum);
  });
  return sumArr;
}

console.log(partsSums([0, 1, 3, 6, 10]));
