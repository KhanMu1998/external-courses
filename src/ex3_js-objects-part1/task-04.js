function objNewKey(keyToCheck, obj) {
  let newObj = obj;
  if (!(keyToCheck in obj)) {
    newObj[keyToCheck] = "new";
  }
  return obj;
}

module.exports = objNewKey;
