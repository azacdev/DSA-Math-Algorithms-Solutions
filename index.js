// FIBONACCI SEQUENCE

function fibonacci(n) {
  let fib = [0,1]
  for (i = 2; i < n; i++) {
    fib[i] = fib[i-1] + fib[i-2]
  }
  return fib
}

console.log(fibonacci(4))
console.log(fibonacci(6))
console.log(fibonacci(9))

// O(n) Linear Time / Space Complexity


// FACTORIAL OF A NUMBER

// function factorial(n) {
//   let result = 1
//   for(i = 0; i < n; i++) {
//     result += result * i
//   }
//   return result
// }

// console.log(factorial(4)); 
// console.log(factorial(5)); 
// console.log(factorial(7)); 
// O(n) Linear Time / Space Complexity

// PRIME NUMBER

// function prime(n) {
//   if (n < 2) {
//     return false
//   }

//   for(i = 2; i < n; i++) {
//     if(n%i === 0) {
//       return false
//     }
//   }

//   return true
// }

// console.log(prime(1));
// console.log(prime(5));
// console.log(prime(7));

// function recursiveFibbonaci(n) {
//   if (n < 2) {
//     return n
//   }
//   return recursiveFibbonaci(n-1) + recursiveFibbonaci(n-2)
// }

// console.log(recursiveFibbonaci(0));
// console.log(recursiveFibbonaci(1));
// console.log(recursiveFibbonaci(6));

// for( i=0; i<10 -1 ; i++) {
//   console.log(i);
// }
