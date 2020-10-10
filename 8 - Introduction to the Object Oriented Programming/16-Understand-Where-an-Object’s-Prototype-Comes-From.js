

// Object Oriented Programming: Understand Where an Object’s Prototype Comes From

// Just like people inherit genes from their parents, an object inherits its prototype directly from the constructor function that created it. For example, here the Bird constructor creates the duck object:

function Bird(name) {
    this.name = name;
}

let duck = new Bird("Donald");

// duck inherits its prototype from the Bird constructor function. You can show this relationship with the isPrototypeOf method:

Bird.prototype.isPrototypeOf(duck);
// returns true

// Use isPrototypeOf to check the prototype of beagle.

function Dog(name) {
    this.name = name;
  }
  
  let beagle = new Dog("Snoopy");
  
  // Only change code below this line
  let res = Dog.prototype.isPrototypeOf(beagle)
  console.log(res)
  
  const beagle1 = {
    name: "Mark",
    color: "black",
    numLegs: 4
  }
  
  let res1 = Dog.prototype.isPrototypeOf(beagle1)
  console.log(res1)
  
  
  
  