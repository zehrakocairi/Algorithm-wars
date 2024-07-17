export class Kata {
  static squareDigits(num: number): number {
  let arr = num.toString().split("");

  let mappedElm = arr.map((elm) => +elm * +elm);

  return +mappedElm.join("");
  }
}

console.log(Kata.squareDigits(9119));
