// POWER OF TWO
// An interger is a power of two if there exist an interger "X" sunch that n === 2^x

// e.g
// n = 8
// 8 / 2 = 4 (remainder 0)
// 4 / 2 = 2 (remainder 0)
// 2 / 2 = 1 (remainder 0)

// if remainder is not 0 in any step, "n" is not a power of two
// if remainder is 0 and "n" comes down to 1 eventually, n is a power of two

// isPowerOfTwo(1) = true (2^0)
// isPowerOfTwo(2) = true (2^1)
// isPowerOfTwo(5) = false

// Given a positive integer "n", determine if a number is a power of 2 or not.

function isPowerOfTwo(n) {
  if (n < 1) {
    return false;
  }
  while (n > 1) {
    if (n % 2 !== 0) {
      return false;
    }
    n = n / 2;
  }
  return true;
}

console.log(isPowerOfTwo(3));
console.log(isPowerOfTwo(5));
console.log(isPowerOfTwo(8));
