function InputTypeCheck(valueToCheck) {
  if (isNaN(valueToCheck)) {
    return undefined;
  }
  if (typeof valueToCheck === "number") {
    return "number";
  }
  if (typeof valueToCheck === "string") {
    return "string";
  }

  return undefined;
}
module.exports = InputTypeCheck;
