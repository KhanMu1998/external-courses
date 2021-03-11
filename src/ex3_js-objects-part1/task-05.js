let bike = {
  wheels: "round",
  wheelSize: 27,
  thirdWheel: false,
};

function objCopy(obj) {
  let newObj = Object.assign({}, obj);
  return newObj;
}

objCopy(bike);
console.log(bike);

module.exports = objCopy;
