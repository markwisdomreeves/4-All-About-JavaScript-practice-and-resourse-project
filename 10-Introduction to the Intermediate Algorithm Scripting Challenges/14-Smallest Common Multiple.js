

// Intermediate Algorithm Scripting: Smallest Common Multiple
// Find the smallest common multiple of the provided parameters that can be evenly divided by both, as well as by all sequential numbers in the range between these parameters.

// The range will be an array of two numbers that will not necessarily be in numerical order.

// For example, if given 1 and 3, find the smallest common multiple of both 1 and 3 that is also evenly divisible by all numbers between 1 and 3. The answer here would be 6.

// Problem Explanation
// The smallest common multiple between two numbers is the smallest number that both numbers can divide into. This concept can be extended to more than two numbers as well.

// We can first start with just finding the smallest common multiple between two numbers. Naively, you can start writing out multiple of each number until you write a multiple that exists from both numbers.

// An example would be the numbers 3 and 4. The multiples of 3 are 3, 6, 9, 12, 15, 18, ... and the multiples of 4 are 4, 8, 12, 16, 20, .... The first smallest number we run into in both lists is 12 so this is the smallest common multiple between 3 and 4.

// This problem can be confusing because most people look for the smallest common multiple of just the two numbers but forget the keyword range. However, this means that if you are given [1,5], then you have to check for the smallest common multiple for all the numbers [1,2,3,4,5] that is evenly divisible by all of them.


// Hint 1
// Create an array with all the numbers that are missing from the original array to make it easier to check when having to check for even division.

// Hint 2
// You can use remainder operator (%) to check if the reminder of a division is 0, which means it is evenly divisible.

// Hint 3
// If you sort the array from greatest to smallest, then you can use the first two numbers as a first check for the smallest common multiple. This is because they are more likely to be the smallest common multiple than the lower numbers.


// The Problem
function smallestCommons(arr) {
    return arr;
}
   
smallestCommons([1,5]);



// Problem Solved: One
function smallestCommons(arr) {
    var range = [];
    for (var i = Math.max(arr[0], arr[1]); i >= Math.min(arr[0], arr[1]); i--) {
      range.push(i);
    }
  
    // can use reduce() in place of this block
    var lcm = range[0];
    for (i = 1; i < range.length; i++) {
      var GCD = gcd(lcm, range[i]);
      lcm = (lcm * range[i]) / GCD;
    }
    return lcm;
  
    function gcd(x, y) {
      // Implements the Euclidean Algorithm
      if (y === 0) return x;
      else return gcd(y, x % y);
    }
}
  
// test here
smallestCommons([1, 5]);

// Code Explanation
// The first, basic solution requires over 2,000 loops to calculate the test case smallestCommons([1,13]), and over 4 million loops to calculate smallestCommons([1,25]). This solution evaluates smallestCommons([1,13]) in around 20 loops and smallestCommons([1,25]) in 40, by using a more efficient algorithm.
// Make an empty array range.
// All numbers between the given range are pushed to range using a for loop.
// The next block of code implements the Euclidean algorithm, which is used for finding smallest common multiples.
  

// Problem Solved: Two
function smallestCommons(arr) {
    let max = Math.max(...arr);
    let min = Math.min(...arr);
    console.log(max, min)
    // Initially the solution is assigned to the highest value of the array
    let sol = max;
  
    for (let i = max - 1; i >= min; i--) {
      // Each time the solution checks (i.e. sol%i===0) it won't be necessary
      // to increment 'max' to our solution and restart the loop
      if (sol % i) {
        sol += max;
        i = max;
      }
    }
    return sol;
}
  
let res = smallestCommons([1,5]);
console.log(res)

// Code Explanation
// Extract min and max from arr using Math.min() and Math.max(), respectively. As the arguments to these functions are integers, it is necessary to spread ... the array.
// As a first guess, let’s say that the solution is max. (we will increment this value later on if it is not the solution)
// Confirm that our solution is a multiple of all the values between max and min using a for loop.
// In case it isn’t a solution, increment max to our solution (i.e. get the next multiple of the arr highest value) and restart the loop i = max. Note that it isn’t i = max - 1 since the for loop hasn’t finished yet. Once it is finished, the loop itself will execute i--. It is also worth mentioning now that we started the loop at i = max and decremented i throughout instead of starting at i = min and then increment it in order to minimize the number of iterations.
// The if statement never being true means that all numbers between min and max are divisible by our solution


// Problem Solved: Three
function smallestCommons(arr) {
    // Euclidean algorithm for the greatest common divisor.
    // ref: https://en.wikipedia.org/wiki/Euclidean_algorithm
    const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));
  
    // Least Common Multiple for two numbers based on GCD
    const lcm = (a, b) => (a * b) / gcd(a, b);
  
    // range
    let [min, max] = arr.sort((a, b) => a - b);
    let currentLCM = min;
  
    while (min < max) {
      currentLCM = lcm(currentLCM, ++min);
    }
  
    return currentLCM;
}
  
// test here
smallestCommons([1, 5]);

// Code Explanation
// Extract minimum and maximum from provided arr by sorting and grabbing the first and last values.
// Initialise smallestCommon with the LCM of first two numbers.
// Loop through range computing LCM of current LCM and next number in range lcm(a, b, c) = lcm(lcm(a, b), c).
