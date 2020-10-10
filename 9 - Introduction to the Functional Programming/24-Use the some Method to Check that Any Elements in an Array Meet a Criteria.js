

// Functional Programming: Use the some Method to Check that Any Elements in an Array Meet a Criteria
// The some method works with arrays to check if any element passes a particular test. It returns a Boolean value - true if any of the values meet the criteria, false if not.

// For example, the following code would check if any element in the numbers array is less than 10:

var numbers = [10, 50, 8, 220, 110, 11];
numbers.some(function(currentValue) {
  return currentValue < 10;
});
// Returns true


// Use the some method inside the checkPositive function to check if any element in arr is positive. The function should return a Boolean value.

// The Problem
function checkPositive(arr) {
    // Only change code below this line
  
  
    // Only change code above this line
}
checkPositive([1, 2, 3, -4, 5]);


// Problem Solved: One
function checkPositive(arr) {
    // Only change code below this line
    return arr.some(val => val > 0)
  
    // Only change code above this line
}

let res = checkPositive([1, 2, 3, -4, 5]);
console.log(res)
  


  