

// Functional Programming: Sort an Array Alphabetically using the sort Method
// The sort method sorts the elements of an array according to the callback function.

// For example:

function ascendingOrder(arr) {
    return arr.sort(function(a, b) {
      return a - b;
    });
}
ascendingOrder([1, 5, 2, 3, 4]);
// Returns [1, 2, 3, 4, 5]
  
function reverseAlpha(arr) {
    return arr.sort(function(a, b) {
      return a === b ? 0 : a < b ? 1 : -1;
    });
}
reverseAlpha(['l', 'h', 'z', 'b', 's']);
// Returns ['z', 's', 'l', 'h', 'b']


// JavaScript's default sorting method is by string Unicode point value, which may return unexpected results. Therefore, it is encouraged to provide a callback function to specify how to sort the array items. When such a callback function, normally called compareFunction, is supplied, the array elements are sorted according to the return value of the compareFunction: If compareFunction(a,b) returns a value less than 0 for two elements a and b, then a will come before b. If compareFunction(a,b) returns a value greater than 0 for two elements a and b, then b will come before a. If compareFunction(a,b) returns a value equal to 0 for two elements a and b, then a and b will remain unchanged.

// Use the sort method in the alphabeticalOrder function to sort the elements of arr in alphabetical order.


// Problem
function alphabeticalOrder(arr) {
    // Only change code below this line
  
  
    // Only change code above this line
}
  
let res = alphabeticalOrder(["a", "d", "c", "a", "z", "g"]);
console.log(res)


// Problem Solved: One
function alphabeticalOrder(arr) {
    // Add your code below this line
    return arr.sort(function(a, b) {
      return a === b ? 0 : a < b ? -1 : 1;
    });
    // Add your code above this line
  }
alphabeticalOrder(["a", "d", "c", "a", "z", "g"]);


// Problem Solved: Two
function reverseAlphabeticalOrder(arr) {
    // Add your code below this line
    return arr.sort(function(a, b) {
      return a === b ? 0 : a < b ? 1 : -1;
    });
    // Add your code above this line
  }
reverseAlphabeticalOrder(["l", "h", "z", "b", "s"]);
// Returns ['z', 's', 'l', 'h', 'b']


// Problem Three
function alphabeticalOrder(arr) {
    // Only change code below this line
    return arr.sort(function(a, b) {
      if (a < b) {
        return -1;
      }
      if (a > b) {
        return 1;
      }
      return 0
    });
  
    // Only change code above this line
}

let res = alphabeticalOrder(["a", "d", "c", "a", "z", "g"]);
console.log(res)
  
  


































// In this tutorial, we are going to learn about how to sort an array of objects alphabetically by using object key/property in JavaScript.
// Consider we have an array of objects with name and value properties.

const users = [
  { name: 'King', value: 21 },
  { name: 'raj', value: 37 },
  { name: 'Aana', value: 45 },
  { name: 'Bob', value: -12 },
  { name: 'Jim', value: 13 },
  { name: 'Doll', value: 37 }
];

// Now we need to sort the objects in an above array alphabetically by using its name property.
// JavaScript has a built-in sort() method which helps us to sort an array alphabetically.

// Example:

const sortedusers = users.sort(function(a, b) {
  var nameA = a.name.toUpperCase(); // ignore upper and lowercase
  var nameB = b.name.toUpperCase(); // ignore upper and lowercase
  if (nameA < nameB) {
    return -1; //nameA comes first
  }
  if (nameA > nameB) {
    return 1; // nameB comes first
  }
  return 0;  // names must be equal
});

console.log(sortedUsers)


// Output
// [
//     {name: "Aana", value: 45}
//     {name: "Bob", value: -12}
//     {name: "Doll", value: 37}
//     {name: "Jim", value: 13}
//     {name: "King", value: 21}
//     {name: "raj", value: 37}
// ]