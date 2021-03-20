function randomRange(min, max) {
  return Math.round(min + Math.random() * (max - min));
}

module.exports = randomRange;
