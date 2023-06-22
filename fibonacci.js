// FIBONACCI SEQUENCE

// In mathematics, the fibonacci sequence is a sequence in which each number is the summation of the two preceding one's.

// fibonacci(2) = [0,1]
// fibonacci(3) = [0,1,1]
// fibonacci(7) = [0,1,1,2,3,5,8]

// Given a number "n", find the first "n" elements of the fibonacci sequence

function fibonacci(n) {
  let fib = [0, 1];
  for (i = 2; i < n; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }
  return fib;
}

console.log(fibonacci(4));
console.log(fibonacci(5));
console.log(fibonacci(9));

// O(n) Linear Time / Space Complexity (Single Loop as the value of n increases the time complexity also increases)

// First Iteration i = 2 (fib[i-1] + fib[i-2] = fib[i-1] + fib[i-0] (second and first items on the list which is 1 + 0)) = [0,1,1]
// Second Iteration i = 3 (fib[i-1] + fib[i-2] = fib[i-1] + fib[i-1] (third and second items on the list which is 1 + 1)) = [0,1,1,2]
// Third Iteration i = 4 (fib[i-1] + fib[i-3] = fib[i-2] + fib[i-1] (fourth and third items on the list which is 2 + 1)) =[0,1,1,2,3]
// And so on

// Recursion is a function that can call itselt. recusrsive functions require a base case

function recursiveFibbonaci(n) {
  if (n < 2) {
    return n
  }
  return recursiveFibbonaci(n-1) + recursiveFibbonaci(n-2)
}

console.log(recursiveFibbonaci(0));
console.log(recursiveFibbonaci(1));
console.log(recursiveFibbonaci(6));

for( i=0; i<10 -1 ; i++) {
  console.log(i);
}
