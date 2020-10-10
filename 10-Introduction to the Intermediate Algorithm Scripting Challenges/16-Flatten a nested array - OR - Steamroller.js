

// Intermediate Algorithm Scripting: Steamroller
// Flatten a nested array. You must account for varying levels of nesting.


// The Problem
function steamrollArray(arr) {
    return arr;
}
  
steamrollArray([1, [2], [3, [[4]]]]);


// Problem Explanation
// This problem seems simple but you need to make sure to flatten any array, regardless of the level which is what adds a bit of difficulty to the problem.

// Hint 1
// You need to check if an element is an array or not.

// Hint 2
// If you are dealing with an array, then you need flatten it by getting the value inside of the array. This means if you have [[4]] then instead of returning [4] you need to return 4. If you get [[[4]]] then the same, you want the 4. You can access it with arr[index1][index2] to go a level deeper.

// Hint 3
// You will definitely need recursion or another way to go beyond two level arrays to make the code flexible and not hard-coded to the answers needed. Have fun!


// Problem Solved: One
function steamrollArray(arr) {
    var flattenedArray = [];
  
    // Create function that adds an element if it is not an array.
    // If it is an array, then loops through it and uses recursion on that array.
    var flatten = function(arg) {
      if (!Array.isArray(arg)) {
        flattenedArray.push(arg);
      } else {
        for (var a in arg) {
          flatten(arg[a]);
        }
      }
    };
  
    // Call the function for each element in the array
    arr.forEach(flatten);
    return flattenedArray;
}
 
// test here
let res = steamrollArray([1, [2], [3, [[4]]]]);
console.log(res)

// Code Explanation
// Create a new variable to keep flattened arrays.
// Create a function that will add non-array elements to the new variable, and for the ones that are array, loop through them to get the element.
// It does that by using recursion, if the element is an array then call the function again with a layer of array deeper to check if it is an array or not. If it is not then push that non-array element to the variable that gets returned. Otherwise, keep going deeper.
// Invoke the function, the first time you will always pass it an array, so it always falls into the isArray branch
// Return the flattened array.


// Problem Solved: Two
function steamrollArray(arr) {
    let flat = [].concat(...arr);
    return flat.some(Array.isArray) ? steamrollArray(flat) : flat;
}
  
let res = steamrollArray([1, [2], [3, [[4]]]]);
console.log(res)

// Code Explanation
// Use spread operator to concatenate each element of arr with an empty array
// Use Array.some() method to find out if the new array contains an array still
// If it does, use recursion to call steamrollArray again, passing in the new array to repeat the process on the arrays that were deeply nested
// If it does not, return the flattened array

function steamrollArray(val,flatArr=[]) {
    val.forEach(item => {
      if (Array.isArray(item)) steamrollArray(item, flatArr);
      else flatArr.push(item);
    });
    return flatArr;
}

steamrollArray([1, [2], [3, [[4]]]]);


