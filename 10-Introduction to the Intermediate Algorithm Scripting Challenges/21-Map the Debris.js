

// Intermediate Algorithm Scripting: Map the Debris
// Return a new array that transforms the elements' average altitude into their orbital periods (in seconds).

// The array will contain objects in the format {name: 'name', avgAlt: avgAlt}.

// You can read about orbital periods on Wikipedia.

// The values should be rounded to the nearest whole number. The body being orbited is Earth.

// The radius of the earth is 6367.4447 kilometers, and the GM value of earth is 398600.4418 km3s-2.


// Problem Explanation
// The first thing to do is to get familiar with what the program is for by knowing what Orbital period exactly is. You’ve to return a new array that transforms the element’s average altitude into their orbital periods. The parts generally found hard are finding the formula, implementing it and for some people, modifying objects by the key. However, something that is not very clear is the fact that your program has to be able to check for any number of objects in the array; This is what is tested on the second part.


// Hint 1
// The formula needed is:

// Hint 2
// Use Math.round() to round up to the next whole number as requested. Using Math.ceil() will let you pass the first test but fail the second one.

// Hint 3
// Find out how to remove and add key to a JavaScript object.


// Problem 
function orbitalPeriod(arr) {
    var GM = 398600.4418;
    var earthRadius = 6367.4447;
    return arr;
}
  
orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);
  

// Problem Solved: One
function orbitalPeriod(arr) {
    const GM = 398600.4418;
    const earthRadius = 6367.4447;
    return arr.map(({ name, avgAlt }) => {
      const earth = earthRadius + avgAlt;
      const orbitalPeriod = Math.round(2 * Math.PI * Math.sqrt(Math.pow(earth, 3)/GM));
      return { name, orbitalPeriod };
    });
}
  
orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);


// Problem Solved: Two
function orbitalPeriod(arr) {
    var GM = 398600.4418;
    var earthRadius = 6367.4447;
    var newArr = [];
  
    //Looping through each key in arr object
    for (var elem in arr) {
      //Rounding off the orbital period value
      var orbitalPer = Math.round(
        2 * Math.PI * Math.sqrt(Math.pow(arr[elem].avgAlt + earthRadius, 3) / GM)
      );
      //Adding new object with orbitalPeriod property
      newArr.push({name: arr[elem].name, orbitalPeriod: orbitalPer});
    }
  
    return newArr;
}
  
// test here
orbitalPeriod([{ name: "sputnik", avgAlt: 35873.5553 }]);