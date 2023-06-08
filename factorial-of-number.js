// FACTORIAL OF A NUMBER

// Factorial of a number in mathematics, the factorial of a non negative integer 'n' denoted n!, is the product of all positive integers less than or equal to one

// factorial(4) = 4*3*2*1 = 24
// factorial(5) = 5*4*3*2*1 = 120
// factorial(6) = 6*5*4*3*2*1 = 240

function factorial(n) {
    let result = 1
    for(i = 0; i < n; i++) {
        console.log(i);
        // result += result * i
        // console.log(i);
    }
    return result
}

// first iteration i = 0 (result += result * i = result += 1 * 0) result = 0
// second iteration i = 1 (result += result * i = result += 1 * 1) result += 1
// third iteration i = 2 (result += result * i = result += 2 * 1) result += 2
// fourth iteration i = 3 (result += result * i = result += 3 * 2) result += 6
// fifth iteration i = 4 (result += result * i = result += 4 * 6) result += 24
// And so on

console.log(factorial(4)); 
// console.log(factorial(5));
// console.log(factorial(7));

// O(n) Linear Time / Space Complexity (Single Loop as the value of n increases the time complexity also increases)