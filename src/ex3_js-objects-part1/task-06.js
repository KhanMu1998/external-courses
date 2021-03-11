let bike = {
  wheels: "round",
  wheelSize: [1, 2, 3],
  thirdWheel: { one: 1, two: 2 },
};

function deepClone(obj) {
  if (typeof obj === "object") {
    let objClone = {};

    if (Array.isArray(obj)) {
      objClone = [];
      obj.forEach((element, index) => {
        objClone[index] = deepClone(element);
      });
      return objClone;
    }

    for (let key in obj) {
      if (obj) {
        objClone[key] = deepClone(obj[key]);
      }
    }
    return objClone;
  }
  return obj;
}

deepClone(bike);
console.log(deepClone(bike));

module.exports = deepClone;
