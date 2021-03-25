function capitalWord(string) {
  return string[0].toUpperCase() + string.slice(1).toLowerCase();
}

function lowerCamelString(string) {
  let arrOfStr = string.split(" ");
  let newString = "";
  arrOfStr.forEach((element) => {
    newString += capitalWord(element);
  });

  newString = newString[0].toLowerCase() + newString.slice(1);
  return newString;
}
module.exports = lowerCamelString;
