const cache = {};

function fibRecursive(n) {
  // check in cache
  if (n in cache) return cache[n];

  // base cases
  if (n === 0) return 0;
  if (n === 1) return 1;

  // recursive case
  const result = fibRecursive(n - 1) + fibRecursive(n - 2);
  cache[n] = result;
  return result;
}

console.log(fibRecursive(7));
