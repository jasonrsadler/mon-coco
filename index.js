// MIT Licensed

// Adapted from https://mathworld.wolfram.com/MonkeyandCoconutProblem.html for Diophantine equations
// The smallest answer possible for the question as asked is 15,621
// There is a variant where the next morning, when the coconuts are split there isn't one left over, which
// in that case the smallest number possible is 3121. The equation given does
// not take that scenario into consideration (separate equations exist with dependency on n being even or odd).

/**
 *
 * @param {Number} n Number of men
 * @param {Number} m Monkey's share
 * @returns {Number} original number of coconuts
 */
const numLeft = (n, m) => {
  if (isNaN(Number(n)) || isNaN(Number(m))) {
    return 'invalid'
  }
  n = Number(n)
  m = Number(m)
  // N = kn^(n+1)-m(n-1)
  // since we're seeking the smallest number possible,
  // and k is arbitrary (and smallest positive arbitrary is 1), k is dropped:
  // N = n^(n+1)-m(n-1)
  return Math.pow(n, n + 1) - m * (n - 1)
}

module.exports = {
  numLeft
}
