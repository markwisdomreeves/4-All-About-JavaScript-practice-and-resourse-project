

// Intermediate Algorithm Scripting: Sum All Numbers in a Range
// We'll pass you an array of two numbers. Return the sum of those two numbers plus the sum of all the numbers between them. The lowest number will not always come first.

// For example, sumAll([4,1]) should return 10 because sum of all the numbers between 1 and 4 (both inclusive) is 10.

// Problem Explanation
// You need to create a program that will take an array of two numbers who are not necessarily in order, and then add not just those numbers but any numbers in between. For example, [3,1] will be the same as 1+2+3 and not just 3+1


// Hint 1
// Use Math.max() to find the maximum value of two numbers.

// Hint 2
// Use Math.min() to find the minimum value of two numbers.

// Hint 3
// Remember to that you must add all the numbers in between so this would require a way to get those numbers.


// The Problem
function sumAll(arr) {
    return 1;
}
  
let res = sumAll([1, 4]);
console.log(res);


// Problem Solved: One
function sumAll(arr) {
    var max = Math.max(arr[0], arr[1]);
    var min = Math.min(arr[0], arr[1]);
    var temp = 0;
    for (var i = min; i <= max; i++) {
      temp += i;
    }
    return temp;
}
sumAll([1, 4]);

// Code Explanation
// First create a variable to store the max number between two.
// The same as before for the Smallest number.
// We create a temporary variable to add the numbers.
// Since the numbers might not be always in order, using max() and min() will help organize.


// Problem Solved: Two
const sumAll = arr => {
    // Buckle up everything to one!
    const startNum = arr[0];
    const endNum = arr[1];
  
    // Get the count of numbers between the two numbers by subtracting them and add 1 to the absolute value.
    // ex. There are |1-4| + 1 = 4, (1, 2, 3, 4), 4 numbers between 1 and 4.
    const numCount = Math.abs(startNum - endNum) + 1;
  
    // Using Arithmetic Progression summing formula
    const sum = ((startNum + endNum) * numCount) / 2;
    return sum;
  };

// Code Explanation
// The formula for calculating the sum of a continuous range is “(startNum + endNum) * numCount / 2”.
// arr[0] and arr[1] can either be startNum or endNum, order doesn’t matter.
// We can get the count of numbers in range by “Math.abs(arr[0] - arr[1]) + 1”.
// Applying the formula by plugging in the numbers.


// Problem Solved: Three
function sumAll(arr) {
    var sum = 0;
    for (var i = Math.min(...arr); i <= Math.max(...arr); i++) {
      sum += i;
    }
    return sum;
}
  
sumAll([1, 4]);

// Code Explanation
// Creating a variable sum to store the sum of the elements.
// Starting iteration of the loop from min element of given array and stopping when it reaches the max element.
// Using a spread operator (…arr) allows passing the actual array to the function instead of one-by-one elements.




  