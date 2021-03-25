function strCut(str, len) {
  if (str.length < len) return str;

  return str.slice(0, len - 1) + "…";
}

module.exports = strCut;
