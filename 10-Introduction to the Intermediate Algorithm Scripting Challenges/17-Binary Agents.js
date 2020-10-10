

// Intermediate Algorithm Scripting: Binary Agents
// Return an English translated sentence of the passed binary string.

// The binary string will be space separated.

// Problem Explanation
// This problem is very straight forward - you start with a string that represents a sentence in binary code, and you need to translate that into words. There is not a direct way to do this so you will have to translate twice.

// Hint 1
// You should first convert from binary to decimal before translating those values into characters.

// Hint 2
// Things are easier when focusing on smaller parts, divide the input to focus on one letter at a time.

// Hint 3
// Make sure that each time you transcode a character from binary to decimal, you reset whatever variable you used to keep track of the ones. Also do not forget to turn everything back into one string.

// The Problem
function binaryAgent(str) {
    return str;
}
  
binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");
  

// Problem Solved: One
function binaryAgent(str) {
    var biString = str.split(" ");
    var uniString = [];
  
    /*using the radix (or base) parameter in parseInt, we can convert the binary
        number to a decimal number while simultaneously converting to a char*/
  
    for (var i = 0; i < biString.length; i++) {
      uniString.push(String.fromCharCode(parseInt(biString[i], 2)));
    }
  
    // we then simply join the string
    return uniString.join("");
  }
  
  // test here
  binaryAgent(
    "01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111"
);

// Code Explanation
// Separate the string into an array of strings separated by whitespace.
// Create some variables that you will use along the way - the names are self explanatory for the most part.
// Iterate through each binary string in the new array.
// Convert to decimal by using parseInt(_binary_, 2). Use the second parameter to specify the base of the input numbers.
// At the end, return the converted message.


function binaryAgent(str) {
    return String.fromCharCode(
      ...str.split(" ").map(function(char) {
        return parseInt(char, 2);
      })
    );
}
  
// test here
let res = binaryAgent(
    "01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111"
);

console.log(res)

// Code Explanation
// First we use split() to be able to work on each character as an Array element
// Then use map() to process each element from binary to decimal using pareseInt()
// Last we can use String.fromCharCode() to convert each ASCII number into the corresponding character
// However fromCharCode() expects a series of numbers rather than an Array! We can use ES6 Spread Operator to pass in an Array of numbers as individual numbers.

