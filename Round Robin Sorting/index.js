function santaSort(unsortedNames) {
  const sortedNames = unsortedNames.sort();
  const result = [];
  let currentValue = sortedNames[0];
  result.push(currentValue);
  for (let i = 1; i < sortedNames.length; i++) {
    if (sortedNames[i] && currentValue === sortedNames[i]) {
      continue;
    }
    currentValue = sortedNames[i];
    sortedNames[i] = undefined;
    result.push(currentValue);
  }
  return result;
}

console.log(santaSort(["Eva", "Alex", "Eva", "Marie", "Alex", "Marie"]));
