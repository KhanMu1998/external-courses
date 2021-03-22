function trimString(string) {
  let newString = string;
  if (newString[0] === " ") {
    newString = string.slice(1);
  }
  if (newString[newString.length - 1] === " ") {
    newString = newString.slice(0, newString.length - 1);
  }

  return newString;
}

module.exports = trimString;
