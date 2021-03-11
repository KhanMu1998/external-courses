let bike = {
  wheels: "round",
  wheelSize: 27,
  thirdWheel: false,
};

function objNewKey(keyToCheck, obj) {
  let newObj = obj;
  if (!(keyToCheck in obj)) {
    newObj[keyToCheck] = "new";
  }
  return obj;
}

objNewKey("new", bike);
console.log(bike);
module.exports = objNewKey;
