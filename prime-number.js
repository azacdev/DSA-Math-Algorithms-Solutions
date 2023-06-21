// Prime Number
// A prime number is a number greater than 1 that is not the product of two smaller natural numbers
// It is a number that is only divisible by 1 and itself
// e.g 3,5,7,9,11,13,15

// Given a natural number n, determine if the number is natural or not

function primeNumber(n) {
  if(n < 2 ) {
    return false
  }
  for(i = 2; i < n; i++) {
    if( n % i === 0) {
      return false
    }
    else {
      return true
    }
  }
 
}

console.log(primeNumber(1)); // false
console.log(primeNumber(4)); // false
console.log(primeNumber(7)); // true