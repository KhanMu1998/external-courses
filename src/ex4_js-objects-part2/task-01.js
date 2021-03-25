function objProt(key, obj) {
  return obj.__proto__[key];
}

module.exports = objProt;
