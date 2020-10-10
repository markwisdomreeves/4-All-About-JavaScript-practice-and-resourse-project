
// avaScript Algorithms and Data Structures Projects: Telephone Number Validator
// Return true if the passed string looks like a valid US phone number.

// The user may fill out the form field any way they choose as long as it has the format of a valid US number. The following are examples of valid formats for US numbers (refer to the tests below for other variants):

// 555-555-5555
// (555)555-5555
// (555) 555-5555
// 555 555 5555
// 5555555555
// 1 555 555 5555
// For this challenge you will be presented with a string such as 800-692-7753 or 8oo-six427676;laskdjf. Your job is to validate or reject the US phone number based on any combination of the formats provided above. The area code is required. If the country code is provided, you must confirm that the country code is 1. Return true if the string is a valid US phone number; otherwise return false.


// Hints
// Hint 1
// There is no way around it, you will need to brush up your regular expressions skills.

// Hint 2
// Try using a site from the previous list to test the regex live while you create it.

// Hint 3
// Start by trying to get it to validate each format from the example, each one should take a new line, once you get to select them all, then add examples that should not be selected and make sure they are not selected.

// Hint 4
// Think through what you are trying to solve in a step by step fashion. Below are the different Booleans you could set up. Once you have these set up, you can create small regex tests for each variable.
// This will lead to a much longer solution than those contained in the spoilers. However it will be easier to decipher and generate.


// Problem Solved: One
function telephoneCheck(str) {
    var regex = /^(1\s?)?(\(\d{3}\)|\d{3})[\s\-]?\d{3}[\s\-]?\d{4}$/;
    return regex.test(str);
}
telephoneCheck("555-555-5555");

// Code Explanation
// ^ denotes the beginning of the string.
// (1\s?)? allows for “1” or "1 " if there is one.
// \d{n} checks for exactly n number of digits so \d{3} checks for three digits.
// x|y checks for either x OR y so (\(\d{3}\)|\d{3}) checks for either three digits surrounded by parentheses, or three digits by themselves with no parentheses.
// [\s\-]? checks for spaces or dashes between the groups of digits.
// $ denotes the end of the string. In this case the beginning ^ and end of the string $ are used in the regex to prevent it from matching any longer string that might contain a valid phone number (eg. “s 555 555 5555 3”).
// Lastly we use regex.test(str) to test if the string adheres to the regular expression, it returns true or false.


// Set up your Booleans here
let hasTenDigits = false;
let hasElevenDigits = false;
let startsWithOne = false;
let hasPermittedCharsOnly = false;
let hasCorrectParentheses = false;

if (!hasTenDigits && !hasElevenDigits) {
  return false;
} else if (!hasPermittedCharsOnly || !hasCorrectParentheses) {
  return false;
} else if (hasElevenDigits && !startsWithOne) {
  return false;
} else {
  return true;
}
