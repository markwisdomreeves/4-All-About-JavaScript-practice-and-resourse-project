
// JavaScript Algorithms and Data Structures Projects: Roman Numeral Converter
// Convert the given number into a roman numeral.

// All roman numerals answers should be provided in upper-case.

// Problem Explanation
// You will create a program that converts an integer to a Roman Numeral.

// Hints
// Hint 1
// Creating two arrays, one with the Roman Numerals and one with the decimal equivalent for the new forms will be very helpful.

// Hint 2
// If you add the numbers to the arrays that go before the new letter is introduced, like values for 4, 9, and 40, it will save you plenty of code.

// Hint 3
// You can’t have more than three consecutive Roman numerals together.

function convertToRoman(num) {
    let decimalValue = [
        1000,
        900,
        500,
        400,
        100,
        90,
        50,
        40,
        10,
        9,
        5,
        4,
        1
    ];
    let romanNumeral = [
        "M",
        "CM",
        "D",
        "CD",
        "C",
        "XC",
        "L",
        "XL",
        "X",
        "IX",
        "V",
        "IV",
        "I"
    ];
   
    let romanized = "";
   
    for (let index = 0; index < decimalValue.length; index++) {
        while (decimalValue[index] <= num) {
            romanized += romanNumeral[index];
            num -= decimalValue[index];
      }
    }
   
    return romanized;
   
};
   
let res = convertToRoman(2);
console.log(res)   


// Code Explanation
// We start off by creating two arrays with default conversion with matching indices. These are called decimalValue and romanNumeral. We also create an empty string variable, romanized, which will house the final roman number.
// Using a for loop, we loop through the indicies of the decimalValue array. We continue to loop until while the value at the current index will fit into num.
// Next, we add the roman numeral and decrease num by the decimal equivalent.
// Finally, we return the value of romanized.


function convertToRoman(num) {
    function getNumeral(digit, lowStr, midStr, nextStr) {
      switch (true) {
        case digit <= 3:
          return lowStr.repeat(digit);
        case digit === 4:
          return lowStr + midStr;
        case digit <= 8: // digits 5-8
          return midStr + lowStr.repeat(digit - 5);
        default: // digit 9
          return lowStr + nextStr
      }
    }
  
    let str = ""
  
    // Thousands
    str += "M".repeat(Math.floor(num/1000));
    num %= 1000;
  
    // Hundreds
    str += getNumeral(Math.floor(num/100), 'C', 'D', 'M')
    num %= 100;
  
    // Tens
    str += getNumeral(Math.floor(num/10), 'X', 'L', 'C')
    num %= 10;
  
    // Ones
    str += getNumeral(num, 'I', 'V', 'X')
  
    return str;
}
  
convertToRoman(36);

// Code explanation:
// Roman numerals up to 999 follow a pattern for each digit. For single digit numbers, you have the strings I, V and X. For multiples of ten, you have X, L and C. For multiples of 100, you have C, D and M. So to get the final Roman numeral, just find out the individual string based on those 3 combinations and then concatenate them together.

// Define a function that will take the three strings and a single digit and output its Roman numeral based on the pattern.
// For numbers over 1000, you just repeat M for each thousand.
// Use the function to get the Roman Numeral for 100’s, 10’s and 1’s.


