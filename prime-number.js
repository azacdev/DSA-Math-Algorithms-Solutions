// Prime Number
// A prime number is a number greater than 1 that is not the product of two smaller natural numbers
// It is a number that is only divisible by 1 and itself
// e.g 2,3,5,7,11,13,17,19

// Given a natural number n, determine if the number is natural or not

function primeNumber(n) {
  if(n < 2 ) {
    return false
  }
  for(i = 2; i < n; i++) {
    if( n % i === 0) { // if "n" is divisible by any number less than it without a remainder
      return false //  then "n" is not a prime number
    }
    else {
      return true
    }
  } 
}


console.log(primeNumber(1)); // false
console.log(primeNumber(4)); // false
console.log(primeNumber(7)); // true

// % returns a remainder after dividing n by whatever number you pass at it
// e.g n = 7
// 7 % 2 = 1 | 7 % 3 = 1 | 7 % 4 = 3 | 7 % 5 = 2 | 7 % 6 = 1
// since no number less than 7 can go into 7 and return 0
// 7 is a prime number

// e.g 2
// n = 6
// 6 % 2 = 0
// since 2 can go into 6 without a remainder 6 is not a prime number

// e.g 3
// n = 9
// 9 % 2 = 1
// 9 % 3 = 0
// on the second iteration since 3 can go into 9 without a remainder 9 is not a prime number