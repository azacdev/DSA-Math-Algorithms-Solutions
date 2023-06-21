// FACTORIAL OF A NUMBER

// Factorial of a number in mathematics, the factorial of a non negative integer 'n' denoted n!, is the product of all positive integers less than or equal to one

// factorial(4) = 4*3*2*1 = 24
// factorial(5) = 5*4*3*2*1 = 120
// factorial(6) = 6*5*4*3*2*1 = 240

function factorial(n) {
  let result = 1;
  for (i = 1; i < n; i++) {
    result += result * i
  }
  return result;
}

// first iteration i = 1 (result += result * i = result += 1 * 1) result = 1
// second iteration i = 2 (result += result * i = result += 1 * 2) result += 2
// third iteration i = 3 (result += result * i = result += 2 * 3) result += 6
// fourth iteration i = 4 (result += result * i = result += 6 * 4) result += 24
// fifth iteration i = 5 (result += result * i = result += 24 * 5) result += 120
// And so on

console.log(factorial(4));
console.log(factorial(5));
console.log(factorial(7));

// O(n) Linear Time / Space Complexity (Single Loop as the value of n increases the time complexity also increases)