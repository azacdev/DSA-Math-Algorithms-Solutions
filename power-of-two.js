// POWER OF TWO
// An interger is a power of two if there exist an interger "X" such that n === 2^x
// e.g 2,4,8,16,32

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
  while (n > 1) { // n will get divider by 2 if n is greater than 1 the loops keep going
    if (n % 2 !== 0) { // if the remainder is not equal to zero n is not a power of two
      return false;
    }  // If n is divisible by 2 (i.e., n % 2 equals 0), the code proceeds to divide n by 2 using the assignment n = n / 2. This step effectively reduces n by half.If n is divisible by 2 (i.e., n % 2 equals 0), the code proceeds to divide n by 2 using the assignment n = n / 2.
    n = n / 2  // Once n reaches a value of 1, it means that the original input n was a power of two. At this point, the loop exits, and the function returns true.
  }
  return true;
}

console.log(isPowerOfTwo(3));
console.log(isPowerOfTwo(5));
console.log(isPowerOfTwo(8));