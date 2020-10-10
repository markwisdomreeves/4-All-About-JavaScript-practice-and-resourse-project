
// Intermediate Algorithm Scripting: Wherefore art thou
// Make a function that looks through an array of objects (first argument) and returns an array of all objects that have matching name and value pairs (second argument). Each name and value pair of the source object has to be present in the object from the collection if it is to be included in the returned array.

// For example, if the first argument is [{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], and the second argument is { last: "Capulet" }, then you must return the third object from the array (the first argument), because it contains the name and its value, that was passed on as the second argument.


// The Problem
function whatIsInAName(collection, source) {
    var arr = [];
    // Only change code below this line
  
  
    // Only change code above this line
    return arr;
}
  
let res = whatIsInAName(
    [{ first: "Romeo", last: "Montague" }, 
    { first: "Mercutio", last: null }, 
    { first: "Tybalt", last: "Capulet"},
    { first: "Mark", last: "Wisdom"},
    { first: "John", last: "Reeves"},
    { first: "Williams", last: "Dicksons"},
    { first: "Prince", last: "Toe"}], { last: "Dicksons" });
  
  console.log(res)
  

// Hints
// Hint 1
// You may use for loop or the Array.prototype.filter method.

// Hint 2
// Try to use the Object.prototype.hasOwnProperty method to know if the property name exists in an object (as its own property).

// Hint 3
// Check equivalence of Object in collection with Object passed as second parameter to whatIsInAName function.


// Problem Solved: One
function whatIsInAName(collection, source) {
    // "What's in a name? that which we call a rose
    // By any other name would smell as sweet.”
    // -- by William Shakespeare, Romeo and Juliet
    var srcKeys = Object.keys(source);
  
    // filter the collection
    return collection.filter(function(obj) {
      for (var i = 0; i < srcKeys.length; i++) {
        if (
          !obj.hasOwnProperty(srcKeys[i]) ||
          obj[srcKeys[i]] !== source[srcKeys[i]]
        ) {
          return false;
        }
      }
      return true;
    });
  }
  
  // test here
  let res = whatIsInAName(
    [{ first: "Romeo", last: "Montague" }, 
    { first: "Mercutio", last: null }, 
    { first: "Tybalt", last: "Capulet"},
    { first: "Mark", last: "Wisdom"},
    { first: "John", last: "Reeves"},
    { first: "Williams", last: "Dicksons"},
    { first: "Prince", last: "Toe"}], { last: "Dicksons" });
  
  console.log(res)
  
// console.log(res)

// Code Explanation
// We filter through the array using .filter().
// Using a for loop we loop through each item in the object.
// We use a if statement to check if the object in the collection doesn’t have the key and the property value doesn’t match the value in source.
// We return false if the above if statement is correct. Otherwise, we return true;


// Problem Solved: Two
function whatIsInAName(collection, source) {
    // "What's in a name? that which we call a rose
    // By any other name would smell as sweet.”
    // -- by William Shakespeare, Romeo and Juliet
    var srcKeys = Object.keys(source);
  
    return collection.filter(function(obj) {
      return srcKeys.every(function(key) {
        return obj.hasOwnProperty(key) && obj[key] === source[key];
      });
    });
  }
  
  // test here
  let res = whatIsInAName(
    [{ first: "Romeo", last: "Montague" }, 
    { first: "Mercutio", last: null }, 
    { first: "Tybalt", last: "Capulet"},
    { first: "Mark", last: "Wisdom"},
    { first: "John", last: "Reeves"},
    { first: "Williams", last: "Dicksons"},
    { first: "Prince", last: "Toe"}], { last: "Dicksons" });
  
  console.log(res)
  
// Code Explanation
// We filter through the collection using .filter().
// Next, we return a Boolean value for the .filter() method.
// Finally, we reduce to Boolean value to be returned for the .every() method.


// Problem Solved: Three
function whatIsInAName(collection, source) {
    // "What's in a name? that which we call a rose
    // By any other name would smell as sweet.”
    // -- by William Shakespeare, Romeo and Juliet
    var srcKeys = Object.keys(source);
  
    // filter the collection
    return collection.filter(function(obj) {
      return srcKeys
        .map(function(key) {
          return obj.hasOwnProperty(key) && obj[key] === source[key];
        })
        .reduce(function(a, b) {
          return a && b;
        });
    });
  }
  
// test here
let res = whatIsInAName(
    [{ first: "Romeo", last: "Montague" }, 
    { first: "Mercutio", last: null }, 
    { first: "Tybalt", last: "Capulet"},
    { first: "Mark", last: "Wisdom"},
    { first: "John", last: "Reeves"},
    { first: "Williams", last: "Dicksons"},
    { first: "Prince", last: "Toe"}], { last: "Dicksons" });
  
  console.log(res)
  

// Code Explanation
// We start by filtering through collection using Array.filter().
// Next, we map through all keys and return Boolean values based on the check conditions: both the key and its corresponding value must exist within the object we are filtering through.
// Then we reduce the mapped Boolean values to a single Boolean that indicates whether all srcKeys pass the conditions checked above.
// This single Boolean will be used to filter through the collection.

