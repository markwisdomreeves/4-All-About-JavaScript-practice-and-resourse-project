

// Intermediate Algorithm Scripting: Sum All Primes
// A prime number is a whole number greater than 1 with exactly two divisors: 1 and itself. For example, 2 is a prime number because it is only divisible by 1 and 2. In contrast, 4 is not prime since it is divisible by 1, 2 and 4.

// Rewrite sumPrimes so it returns the sum of all prime numbers that are less than or equal to num.

// Problem Explanation
// The explanation for this problem is very simple. You will generate a list of prime numbers up to the number you are given as a parameter. Then you need to add them all up and return that value. The tricky part is on generating the list of prime numbers. I suggest you find a code or a good math algorithm that you can turn into code.


// Hints
// Hint 1
// Generate a list of all the numbers up to and including the one you got as a parameter. This will be needed to determine which numbers are prime or not.

// Hint 2
// Check this link 1.8k if you prefer to find a solution for finding primes, or try learning and implementing your own Sieve of Eratosthenes 2.7k

// Hint 3
// This problem is hard if you have to create your own code to check for primes, so don’t feel bad if you had to use someone’s code for that bit. Either way, you are most likely using array, so once you generate an array of primes, then just add them all up and return the number you get.


// Problem Solved: One
function sumPrimes(num) {
    let i = 1;
    let sum = 0;
    while (i <= num) {
      if (isPrime(i)) {
        sum += i;
      }
      i++;
    }
    return sum;
  }
  //function to check if a number is prime or not
  function isPrime(x) {
    for (let i = 2; i < x; i++) {
      if (x % i === 0) return false;
    }
    return x !== 1 && x !== 0;
}

//test here
sumPrimes(10);

// Code Explanation
// Create a function to check if a number is prime or not.
// Declare two variables. One to keep us within the limit of the given number and the other to store the sum of numbers to be returned.
// Create a loop to check all numbers lesser than or equal to the given number.
// Check if a number is prime and add it to the value of sum.
// Return the value of sum once the loop exits.


// Problem Solved: Two
function sumPrimes(num) {
    let numbers = Array.from({ length: num + 1 })
      .map((_, i) => i).slice(2);
      for (let n in numbers) {
        numbers = numbers.filter(val => val === numbers[n] 
        || val % numbers[n] !== 0);
      }
    console.log(numbers)
    return numbers.reduce((prevSum, acc) => prevSum + acc);
}
  
let res = sumPrimes(10);
console.log(res)


// Code Explanation
// Use Array.from() to generate a sequence of numbers up to and including num. Combine with .slice() to slice off first two indices [0, 1] since all prime numbers must be greater than 1.
// If a number is not prime, it is divided by number > 1 other smaller than himself.


// Problem Solved: Three
function sumPrimes(num) {
    // function to check if the number presented is prime
    function isPrime(number) {
      for (let i = 2; i <= number; i++) {
        if (number % i === 0 && number != i) {
          // return true if it is divisible by any number that is not itself.
          return false;
        }
      }
      // if it passes the for loops conditions it is a prime
      return true;
    }
    // 1 is not a prime, so return nothing, also stops the recursive calls.
    if (num === 1) {
      return 0;
    }
    // Check if your number is not prime
    if (isPrime(num) === false) {
      // for non primes check the next number down from your maximum number, do not add anything to your answer
      return sumPrimes(num - 1);
    }
  
    // Check if your number is prime
    if (isPrime(num) === true) {
      // for primes add that number to the next number in the sequence through a recursive call to our sumPrimes function.
      return num + sumPrimes(num - 1);
    }
}
// test here
sumPrimes(10);

// Code Explanation
// The function isPrime checks if a particular number is prime or not.
// If num is 1, return 0 as 1 is not a prime number.
// If num is not prime, check next number down from maximum number.
// If num is prime, add it to next number in the sequence through recursion to sumPrimes function.