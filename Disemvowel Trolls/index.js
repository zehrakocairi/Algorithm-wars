function disemvowel(str) {
  const vowels = ["a", "e", "i", "o", "u"];

  const arr = str.split("");

  arr.forEach((elm, index) => {
    if (vowels.includes(elm.toLowerCase())) {
      delete arr[index];
    }
  });

  return arr.join("");
}

console.log(disemvowel("What are you, a communist?"));
