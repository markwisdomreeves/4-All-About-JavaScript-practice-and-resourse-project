

// Functional Programming: Implement the filter Method on a Prototype
// It would teach us a lot about the filter method if we try to implement a version of it that behaves exactly like Array.prototype.filter(). It can use either a for loop or Array.prototype.forEach().

// Note: A pure function is allowed to alter local variables defined within its scope, although, it's preferable to avoid that as well.

// Write your own Array.prototype.myFilter(), which should behave exactly like Array.prototype.filter(). You may use a for loop or the Array.prototype.forEach() method.

// The Problem
// The global variable
var s = [23, 65, 98, 5];

Array.prototype.myFilter = function(callback){
  // Only change code below this line
  var newArray = [];
  // Only change code above this line
  return newArray;

};

var new_s = s.myFilter(function(item){
  return item % 2 === 1;
});


// Problem Solved: One
// The global variable
let s = [23, 65, 98, 5];

Array.prototype.myFilter = function(callback){
  // Only change code below this line
  let newArray = [];
  this.forEach(function(x) {
    if (callback(x) == true) {
      newArray.push(x);
    }
  });
  // Only change code above this line
  return newArray;
};

let new_s = s.myFilter(function(item){
  return item % 2 === 1;
});


// Problem Solved: Two
let s = [23,65,98,5];

Array.prototype.myFilter = function(callback) {
  var newArray = [];
  // Add your code below this line
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i]) === true) {
      newArray.push(this[i]);
    }
  }
  // Add your code above this line
  return newArray;
};

var new_s = s.myFilter(function(item) {
  return item % 2 === 1;
});





















