function getCount(str) {
  let arr = str.split("");
  let vowelsCount = 0;

  arr.forEach((a) => {
    if (a == "a" || a == "e" || a == "i" || a == "o" || a == "u") {
      vowelsCount++;
    }
  });
  return vowelsCount;
}

console.log(getCount("abracadabra"));
