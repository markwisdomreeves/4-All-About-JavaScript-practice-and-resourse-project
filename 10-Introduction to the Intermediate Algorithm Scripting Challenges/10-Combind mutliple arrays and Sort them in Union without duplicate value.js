

// Intermediate Algorithm Scripting: Sorted Union
// Write a function that takes two or more arrays and returns a new array of unique values in the order of the original provided arrays.

// In other words, all values present from all arrays should be included in their original order, but with no duplicates in the final array.

// The unique numbers should be sorted by their original order, but the final array should not be sorted in numerical order.
// Check the assertion tests for examples.


// Problem Explanation
// The program has to return a new array of unique values from two original arrays in the order they show up. So there is not sorting required, and there shouldn’t be any duplicates.


// Hint 1
// Since you have no idea how many parameters were passed, it would be best to loop through the arguments before looping through the arrays.

// Hint 2
// It isn’t necessary to use loops. You can use functions such as map(), reduce() or others if you want.

// Hint 3
// You will have to check if the current value is already on the array to be returned for every value.


// The Problem
function uniteUnique(arr) {
    return arr;
}
uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
  

// Problem Solved: One
function uniteUnique(arr1, arr2, arr3) {
    // Creates an empty array to store our final result.
    var finalArray = [];
  
    // Loop through the arguments object to truly make the program work with two or more arrays
    // instead of 3.
    for (var i = 0; i < arguments.length; i++) {
      var arrayArguments = arguments[i];
  
      // Loops through the array at hand
      for (var j = 0; j < arrayArguments.length; j++) {
        var indexValue = arrayArguments[j];
  
        // Checks if the value is already on the final array.
        if (finalArray.indexOf(indexValue) < 0) {
          finalArray.push(indexValue);
        }
      }
    }
  
    return finalArray;
}
  
// test here
uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);

// Code Explanation
// Create empty array finalResult to store the final result.
// Loop through the arguments object in the outer loop and store it in arrayArguments.
// The inner loop is used to loop through individual array elements.
// If the element doesn’t already exist in finalArray, add it.
// Return finalArray.


// Problem Solved: Two
function uniteUnique(arr) {
    var args = [...arguments];
    var result = [];
    for (var i = 0; i < args.length; i++) {
      for (var j = 0; j < args[i].length; j++) {
        if (!result.includes(args[i][j])) {
          result.push(args[i][j]);
        }
      }
    }
    return result;
}
  
uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);


function uniteUnique(...arrays) {
    //make an array out of the given arrays and flatten it (using the spread operator)
    const flatArray = [].concat(...arrays);
  
    // create a Set which clears any duplicates since it's a regulat set and not a multiset
    return [...new Set(flatArray)];
}
  
// test here
uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);

// Code Explanation
// We first use concat() with an empty array as a starting point and the spread operator ... to create an array out of the Arguments object and to flatten it at the same time
// then we use the new ES2015 Set object to store only unique values

