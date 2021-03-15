function deepClone(obj) {
  if (typeof obj !== "object") {
    return obj;
  }

  let objClone = {};
  if (Array.isArray(obj)) {
    objClone = [];
    obj.forEach((element, index) => {
      objClone[index] = deepClone(element);
    });
    return objClone;
  }

  for (let key in obj) {
    objClone[key] = deepClone(obj[key]);
  }
  return objClone;
}

module.exports = deepClone;
