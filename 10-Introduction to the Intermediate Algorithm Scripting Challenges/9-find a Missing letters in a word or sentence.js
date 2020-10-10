

// Intermediate Algorithm Scripting: Missing letters
// Find the missing letter in the passed letter range and return it.
// If all letters are present in the range, return undefined.


// Problem Explanation
// You will create a program that will find the missing letter from a string and return it. If there is no missing letter, the program should return undefined. There is currently no test case for the string missing more than one letter, but if there was one, recursion would be used. Also, the letters are always provided in order so there is no need to sort them.

// Hint 1
// You will need to convert from character to ASCII code using the two methods provided in the description.

// Hint 2
// You will have to check for the difference in ASCII code as they are in order. Using a chart would be very helpful.

// Hint 3
// You will need to figure out where the missing letter is, along with handling the case that there is not missing letter as it needs an specific return value.


// The Problem
function fearNotLetter(str) {
    return str;
}
  
fearNotLetter("abce");
  

// Problem Solved: One
function fearNotLetter(str) {
    for (var i = 0; i < str.length; i++) {
      /* code of current character */
      var code = str.charCodeAt(i);
  
      /* if code of current character is not equal to first character + no of iteration
          hence character has been escaped */
      if (code !== str.charCodeAt(0) + i) {
        /* if current character has escaped one character find previous char and return */
        return String.fromCharCode(code - 1);
      }
    }
    return undefined;
}
  
// test here
fearNotLetter("abce");

// Code Explanation
// This solutions makes use of a for loop.
// Code of encountered character is stored in code.
// It is checked if code of current character is the expected one (no characters are skipped) by using the logic - code of current character = code of first character + number of iterations.
// If a character is missing, the missing character is found and the final string is returned.
// undefined is returned if there is no missing character in the string.


// Problem Solved: Two
// Adding this solution for the sake of avoiding using 'for' and 'while' loops.
// See the explanation for reference as to why. It's worth the effort.

function fearNotLetter(str) {
    var compare = str.charCodeAt(0),
      missing;
  
    str.split("").map(function(letter, index) {
      if (str.charCodeAt(index) == compare) {
        ++compare;
      } else {
        missing = String.fromCharCode(compare);
      }
    });
  
    return missing;
}
  
// test here
fearNotLetter("abce");

// Code Explanation
// First we define variables to store the character code for the first letter in the string, and to store whatever missing letters we may find.
// We turn the string to an array in order to map through it instead of using for and while loops.
// As we map through our letters’ character codes, we go comparing with the one that should be in that position.
// If the current letter matches, we move the comparison variable to its next position so we can compare on the next cycle.
// If not, the missing letter will be assigned to the missing variable, which will be returned after the map is finished.
// If there are no missing characters, return undefined.


function fearNotLetter(str) {
    for (let i = 1; i < str.length; ++i) {
      if (str.charCodeAt(i) - str.charCodeAt(i - 1) > 1) {
        return String.fromCharCode(str.charCodeAt(i - 1) + 1);
      }
    }
}

fearNotLetter("abce");

// Code Explanation
// Loop over the string
// Check if the difference in char codes between adjacent characters in the string is more than 1 (check ASCII table)
// Return the missing character ( +1 from where the gap was detected)

