function capitalWord(string) {
  return string[0].toUpperCase() + string.slice(1) + " ";
}
function capitalString(string) {
  let newString = "";
  let arrOfStr = string.split(" ");
  arrOfStr.forEach((element) => {
    newString += capitalWord(element);
  });
  newString = newString.slice(0, newString.length - 1);
  return newString;
}
module.exports = capitalString;
