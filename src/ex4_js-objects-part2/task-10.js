function reversedString(str) {
  let arr = str.split("");
  let newString = "";

  arr.forEach((element) => {
    newString = element + newString;
  });

  return newString;
}
module.exports = reversedString;
