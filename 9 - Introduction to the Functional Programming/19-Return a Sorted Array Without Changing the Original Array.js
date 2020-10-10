

// Functional Programming: Return a Sorted Array Without Changing the Original Array
// A side effect of the sort method is that it changes the order of the elements in the original array. In other words, it mutates the array in place. One way to avoid this is to first concatenate an empty array to the one being sorted (remember that slice and concat return a new array), then run the sort method.

// Use the sort method in the nonMutatingSort function to sort the elements of an array in ascending order. The function should return a new array, and not mutate the globalArray variable.


// The Problem
var globalArray = [5, 6, 3, 2, 9];
function nonMutatingSort(arr) {
  // Only change code below this line


  // Only change code above this line
}
nonMutatingSort(globalArray);


// Problem Solved: One
var globalArray = [5, 6, 3, 2, 9];
function nonMutatingSort(arr) {
  // Add your code below this line
  return [].concat(arr).sort(function(a, b) {
    return a - b;
  });
  // Add your code above this line
}
nonMutatingSort(globalArray);

// Code Explanation
// Firstly concatenate the array taken in as a parameter to a new empty array.
// Then Use the sort() method as seen in the last challenge and create a function to sort the new array in ascending order.


// Problem Solved: Two
var globalArray = [5, 6, 3, 2, 9];
function nonMutatingSort(arr) {
  // Only change code below this line
  let newArray = []
  return newArray.concat(arr).sort(function(a, b) {
    return a - b;
  })

  // Only change code above this line
}
let res = nonMutatingSort(globalArray);
console.log(res)
