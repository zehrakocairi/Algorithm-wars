function onlyDuplicates(str) {
  let arr = str.split("");

  for (let i = 0; i < arr.length; i++) {
    if (arr.indexOf(arr[i]) === arr.lastIndexOf(arr[i])) {
      arr.splice(i, 1);
      i--;
    }
  }

  return arr.join("");
}

console.log(onlyDuplicates("Hello World!"));
