function insertString(str, insStr, pos) {
  let arrOfStr = str.split(" ");
  let newString = "";

  arrOfStr.forEach((element, index) => {
    newString += element + " ";
    if (index === pos) {
      newString += insStr + " ";
    }
  });

  newString = newString.slice(0, newString.length - 1);
  return newString;
}
module.exports = insertString;
