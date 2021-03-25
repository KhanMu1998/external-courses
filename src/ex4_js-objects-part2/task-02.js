function noProt() {
  return Object.setPrototypeOf({}, null);
}

module.exports = noProt;
