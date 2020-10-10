

// Intermediate Algorithm Scripting: Everything Be True
// Check if the predicate (second argument) is truthy on all elements of a collection (first argument).

// In other words, you are given an array collection of objects. The predicate pre will be an object property and you need to return true if its value is truthy. Otherwise, return false.

// In JavaScript, truthy values are values that translate to true when evaluated in a Boolean context.

// Remember, you can access object properties through either dot notation or [] notation.

// Problem
function truthCheck(collection, pre) {
    return pre;
}
  
truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex");


// Problem Explanation
// The program needs to check if the second argument is a truthy 1.6k element, and it must check this for each object in the first argument.

// Hint 1
// Remember to iterate through the first argument to check each object.

// Hint 2
// Only if all of them are truthy will we return true, so make sure all of them check.

// Hint 3
// You could use loops or callback functions, there are multiple ways to solve this problem

// Problem Solved: One
function truthCheck(collection, pre) {
    return collection.every(function(element) {
      return element.hasOwnProperty(pre) && Boolean(element[pre]);
    });
}
  
// test here
truthCheck(
    [
      { user: "Tinky-Winky", sex: "male" },
      { user: "Dipsy", sex: "male" },
      { user: "Laa-Laa", sex: "female" },
      { user: "Po", sex: "female" }
    ],
    "sex"
);

// Code Explanation
// Uses the native “every” method to test whether all elements in the array pass the test.


// Problem Solved: Two
function truthCheck(collection, pre) {
    // Create a counter to check how many are true.
    var counter = 0;
    // Check for each object
    for (var c in collection) {
      // If it is has property and value is truthy
      if (collection[c].hasOwnProperty(pre) && Boolean(collection[c][pre])) {
        counter++;
      }
    }
    // Outside the loop, check to see if we got true for all of them and return true or false
    return counter == collection.length;
}
  
// test here
truthCheck(
    [
      { user: "Tinky-Winky", sex: "male" },
      { user: "Dipsy", sex: "male" },
      { user: "Laa-Laa", sex: "female" },
      { user: "Po", sex: "female" }
    ],
    "sex"
);
  