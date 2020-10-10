

// Intermediate Algorithm Scripting: Diff Two Arrays
// Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays.

// Note
// You can return the array with its elements in any order.


// The Problem
function diffArray(arr1, arr2) {
    var newArr = [];z
    return newArr;
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
  

// Problem Explanation
// Check two arrays and return a new array that contains only the items that are not in either of the original arrays.

// Hint 1
// Merge the list to make it easy to compare functions.

// Hint 2
// Use filter to get the new array, you will need to create a callback function.

// Hint 3
// The best way to go about the callback function is to check if the number from the new merged array is not in both original arrays and return it.


// The Problem Solved: One
function diffArray(arr1, arr2) {
    var newArr = [];
  
    function onlyInFirst(first, second) {
      // Looping through an array to find elements that don't exist in another array
      for (var i = 0; i < first.length; i++) {
        if (second.indexOf(first[i]) === -1) {
          // Pushing the elements unique to first to newArr
          newArr.push(first[i]);
        }
      }
    }
  
    onlyInFirst(arr1, arr2);
    onlyInFirst(arr2, arr1);
  
    return newArr;
}
  
diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);


// The Problem Solved: Two
function diffArray(arr1, arr2) {
    return arr1
      .concat(arr2)
      .filter(item => !arr1.includes(item) || !arr2.includes(item));
}
  
diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);


// The Problem Solved: Three
function diffArray(arr1, arr2) {
    return [...diff(arr1, arr2), ...diff(arr2, arr1)];
  
    function diff(a, b) {
      return a.filter(item => b.indexOf(item) === -1);
    }
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);



