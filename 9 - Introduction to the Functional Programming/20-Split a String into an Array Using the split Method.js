

// Functional Programming: Split a String into an Array Using the split Method
// The split method splits a string into an array of strings. It takes an argument for the delimiter, which can be a character to use to break up the string or a regular expression. For example, if the delimiter is a space, you get an array of words, and if the delimiter is an empty string, you get an array of each character in the string.

// Here are two examples that split one string by spaces, then another by digits using a regular expression:

var str = "Hello World";
var bySpace = str.split(" ");
// Sets bySpace to ["Hello", "World"]

var otherString = "How9are7you2today";
var byDigits = otherString.split(/\d/);
// Sets byDigits to ["How", "are", "you", "today"]

// Since strings are immutable, the split method makes it easier to work with them.

// Use the split method inside the splitify function to split str into an array of words. The function should return the array. Note that the words are not always separated by spaces, and the array should not contain punctuation.

// The Problem
function splitify(str) {
    // Only change code below this line
  
  
    // Only change code above this line
}
splitify("Hello World,I-am code");


// Problem Solved
// Problem Explanation
// Simply split the string to create a new array of words.

// A simple regular expression can be used to achieve this result.

// /\W/ Matches any non-word character. This includes spaces and punctuation, but not underscores. It’s equivalent to /[^A-Za-z0-9_]/.

function splitify(str) {
    // Only change code below this line
    return str.split(/\W/)
  
    // Only change code above this line
}
let res = splitify("Hello World,I-am code");
console.log(res)
  
  
// Breaking email address using split
// We can break any email address by using @ as delimiter to separate userid ( or name ) and the domain part.
var str="username@example.com";
var newArray = [];

newArray = str.split("@");

document.write (newArray[0] + "<br>" + newArray[1]);

// result
// username
// example.com

