

// JavaScript Algorithms and Data Structures Projects: Palindrome Checker
// Return true if the given string is a palindrome. Otherwise, return false.

// A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.

// Note
// You'll need to remove all non-alphanumeric characters (punctuation, spaces and symbols) and turn everything into the same case (lower or upper case) in order to check for palindromes.

// We'll pass strings with varying formats, such as "racecar", "RaceCar", and "race CAR" among others.

// We'll also pass strings with special symbols, such as "2A3*3a2", "2A3 3a2", and "2_A3*3#A2".

// Hint 1
// Regular expressions, RegEx, can be used to remove unwanted characters from the string.

// Hint 2
// The Array.prototype.split and Array.prototype.join methods can be of use here. For and while loops are another alternative, or why not even map!

// Hint 3
// String.prototype.toLowerCase can be used to make a string lowercase.


// Problem Solved: One
function palindrome(str) {
    return (
      str.replace(/[\W_]/g, "").toLowerCase() ===
      str
        .replace(/[\W_]/g, "")
        .toLowerCase()
        .split("")
        .reverse()
        .join("")
    );
}

palindrome("eye");

// Code Explanation
// We start by using regular expressions to replace any white space or non-alphanumeric characters with nothing (or null), which essentially removes them from the string.

// Next we chain .toLowerCase() to remove any capital letters because A is a different character than a. The problem did not ask us to worry about making sure the case of the characters was identical, just the spelling.

// Our next step is to take our string and .split() it, .reverse() it, and finally .join() it back together.

// Last step is to check that the string is the same forwards and backwards and return our result!


// Problem Solved: Two
function palindrome(str) {
    str = str.toLowerCase().replace(/[\W_]/g, "");
    
    for (var i = 0, len = str.length - 1; i < len / 2; i++) {
      if (str[i] !== str[len - i]) {
        return false;
      }
    }
  
    return true;
}
  
let res1 = palindrome("e%y$#&``*e");
console.log(res1)
let res2 = palindrome("race%y$#&`CAR`*");
console.log(res2)
let res3 = palindrome("BOO%y$#&`K`*");
console.log(res3)
  

// Code Explanation
// We start by using the same methods of replacing characters we don’t want in the string using RegEx's, regular expressions, and then make our string lowercase.

// Next we set up our for loop and declare an index i to keep track of the loop. We set our escape sequence to when i is greater than the length of the string divided by two, which tells the loop to stop after the halfway point of the string. And finally we set i to increment after every loop.

// Inside of each loop we want to check that the letter in element [i] is equal to the letter in the length of the string minus i, [str.length - i]. Each loop, the element that is checked on both sides of the string moves closer to the center until we have checked all of the letters. If at any point the letters do not match, we return false. If the loop completes successfully, it means we have a palindrome and therefore we return true!
