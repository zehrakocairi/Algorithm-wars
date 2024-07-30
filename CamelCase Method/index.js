function camelCase(str) {
  if (str === "") {
    return "";
  }
  let arr = str.split(" ");

  let newArr = arr.map((a) => {
    return a[0].toUpperCase() + a.slice(1);
  });

  return newArr.join("");
}

camelCase("test case");
