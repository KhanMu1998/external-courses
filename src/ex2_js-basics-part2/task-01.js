function InputTypeCheck(valueToCheck) {
  if (isNaN(valueToCheck)) {
    return undefined;
  } else if (typeof valueToCheck === "number") {
    return "number";
  } else if (typeof valueToCheck === "string") {
    return "string";
  }

  return undefined;
}
module.exports = InputTypeCheck;
