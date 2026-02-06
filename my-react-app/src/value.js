function memoize(fn) {
  const cache = {};

  return function (n) {
    if (cache[n]) return cache[n];
    const result = fn(n);
    cache[n] = result;
    return result;
  };
}

function slowSquare(n) {
  console.log("Calculating...");
  return n * n;
}

const memoSquare = memoize(slowSquare);

memoSquare(5); // Calculating...
memoSquare(5); // Cached
memoSquare(6); // calculating
memoSquare(6); //cached

Module.exports = { memoize, slowSquare, memoSquare };





