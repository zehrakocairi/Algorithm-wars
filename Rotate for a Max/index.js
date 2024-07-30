function maxRot(n) {
  let arr = n.toString().split("");
  let max = n;

  for (let i = 0; i < arr.length - 1; i++) {
    arr.push(arr.splice(i, 1)[0]);
    let num = parseInt(arr.join(""));
    if (num > max) {
      max = num;
    }
  }
  return max;
}

console.log(maxRot(38458215));
