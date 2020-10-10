

// Intermediate Algorithm Scripting: Search and Replace
// Perform a search and replace on the sentence using the arguments provided and return the new sentence.

// First argument is the sentence to perform the search and replace on.

// Second argument is the word that you will be replacing (before).

// Third argument is what you will be replacing the second argument with (after).

// Note
// Preserve the case of the first character in the original word when you are replacing it. For example if you mean to replace the word "Book" with the word "dog", it should be replaced as "Dog"


// Hint 1
// Find the index where before is in the string.
// Hint 2
// Check first letter case.
// Hint 3
// Strings are immutable, you will need to save the edits on another variable, even if you must reuse the same one just to make it look like the changes where done using just that one variable.



// Problem Solved: One
function myReplace(str, before, after) {
    // Find index where before is on string
    var index = str.indexOf(before);
    // Check to see if the first letter is uppercase or not
    if (str[index] === str[index].toUpperCase()) {
      // Change the after word to be capitalized before we use it.
      after = after.charAt(0).toUpperCase() + after.slice(1);
    } else {
      // Change the after word to be uncapitalized before we use it.
      after = after.charAt(0).toLowerCase() + after.slice(1);
    }
    // Now replace the original str with the edited one.
    str = str.replace(before, after);
  
    return str;
}
  
// test here
myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");

// Code Explanation
// Use indexOf() to find location of before in string.
// If first letter of before is capitalized, change first letter of after to uppercase.
// Replace before in the string with after.
// Return the new string.


// Problem Solved: Two
function myReplace(str, before, after) {
  // Check if first character of argument "before" is a capital or lowercase letter and change the first character of argument "after" to match the case
  if (/^[A-Z]/.test(before)) {
    after = after[0].toUpperCase() + after.substring(1)
  } else {
    after = after[0].toLowerCase() + after.substring(1)
  }

  // return string with argument "before" replaced by argument "after" (with correct case)
  return str.replace(before, after);
}

// test here
myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");
