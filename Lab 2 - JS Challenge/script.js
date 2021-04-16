// EXERCISE NUMBER 6


let spaceship = {
    'Fuel Type': 'Turbo Fuel',
    homePlanet: 'Earth'
};

function greenEnergy(object) {
    this['Fuel Type'] = 'avocado oil';
}

function remotelyDisable(object) {
    this.disable = true;
}

greenEnergy(spaceship);
remotelyDisable(spaceship);

console.log(spaceship);

//Write a function greenEnergy() that has an object as a parameter and sets that object’s 'Fuel Type' property to 'avocado oil'.
//Write a function remotelyDisable() that has an object as a parameter and sets (or reassigns) that object’s disabled property to true.
//Call your two functions with the spaceship object in the code editor, then console.log() the spaceship object to confirm those properties were changed/added.



//*******************************************************

// EXERCISE NUMBER 7

let spaceship = {
    crew: {
        captain: {
            name: 'Lily',
            degree: 'Computer Engineering',
            cheerTeam() { console.log('You got this!') }
        },
        'chief officer': {
            name: 'Dan',
            degree: 'Aerospace Engineering',
            agree() { console.log('I agree, captain!') }
        },
        medic: {
            name: 'Clementine',
            degree: 'Physics',
            announce() { console.log(`Jets on!`) }
        },
        translator: {
            name: 'Shauna',
            degree: 'Conservation Science',
            powerFuel() { console.log('The tank is full!') }
        }
    }
};

let crewRole;
let crewName;
let crewDegree;
let crewObj = new Object(spaceship2.crew); //create a new object

for (let key in crewObj) {
    crewName = crewObj[key]["name"];
    crewRole = key;
    console.log(`${crewRole}: ${crewName}`);
}

for (const key in crewObj) {
    crewName = crewObj[key]["name"];
    crewDegree = crewObj[key]["degree"];
    console.log(`${crewName}: ${crewDegree}`);
}
//Using for...in, iterate through the spaceship.crew object in the code editor and console.log() a list of crew roles and names in the following format: '[crew member's role]: [crew member's name]', e.g.,'chief officer: Dan'.
//Using for...in, iterate through the spaceship.crew object in the code editor and console.log() a list of crew names and degrees in the following format: '[crew member's name]: [crew member's degree]', i.e.,'Lily: Computer Engineering'.




// Let’s REVIEW what we learned in this lesson:

// Objects store collections of key-value pairs.
// Each key-value pair is a property—when a property is a function it is known as a method.
// An object literal is composed of comma-separated key-value pairs surrounded by curly braces.
// You can access, add or edit a property within an object by using dot notation or bracket notation.
// We can add methods to our object literals using key-value syntax with anonymous function expressions as values or by using the new ES6 method syntax.
// We can navigate complex, nested objects by chaining operators.
// Objects are mutable—we can change their properties even when they’re declared with const.
// Objects are passed by reference— when we make changes to an object passed into a function, those changes are permanent.
// We can iterate through objects using the For...in syntax.




// ADVANCED OBJECTS!!!!

const robot = {
    model: '1E78V2',
    energyLevel: 100,
    provideInfo: function () {
        return `I am '1E78V2' and my current energy level is ${this.energyLevel}%`;
    }
};

//is it working
function updateInfo(object, model, energyLevel) {
    this.model = model;
    this.energyLevel = energyLevel;
}

let newRobot = new updateInfo(robot, '1E78V3', 42);

console.log(robot.provideInfo());

// 1)Let’s create a new object to practice using this.

// In main.js there is an object robot, add a property of model and assign to it a value of '1E78V2'. Add another property, energyLevel and assign to it a value of 100.

// 2)Inside the robot object, add a method named provideInfo. Inside the body of provideInfo(), return the following string by using interpolation:

// I am MODEL and my current energy level is ENERGYLEVEL.  
// Replace ‘MODEL’ and ‘ENERGYLEVEL’ with the calling object’s model and energyLevel property. Remember, to get the access to the calling object’s properties inside a method, you have to use the this keyword!

// 3)Now to check .provideInfo() has access to the internal properties of robot. Log the result of calling .provideInfo() method on robot to the console.





//ARROW FUNCTION & 'THIS'

const goat = {
    dietType: 'herbivore',
    makeSound() {
        console.log('baaa');
    },
    diet: () => {
        console.log(this.dietType);
    }
};

goat.diet(); // Prints undefined!!!!!!!!!!

//So what happened? Notice that in the .diet() is defined using an arrow function.
//Arrow functions inherently bind, or tie, an already defined this value to the function itself that is NOT the calling object. In the code snippet above, the value of this is the global object, or an object that exists in the global scope, which doesn’t have a dietType property and therefore returns undefined.



//EXERCISE NUMBER 8

const robot = {
    energyLevel: 100,
    checkEnergy: function () {
        console.log(`Energy is currently at ${this.energyLevel}%.`)
    }
};

robot.checkEnergy();



// 1) Currently the .checkEnergy() method is not producing the correct output because it is using arrow function syntax.

// Refactor, or change, the method to use a function expression. You can write the function using either longhand or shorthand format.

// After refactoring the method, notice that .checkEnergy() has access to the other internal properties of the robot object.







//EXERCISE NUMBER 9

// Here’s an example of using _ to prepend a property.

// const bankAccount = {
//   _amount: 1000
// }
// In the example above, the _amount is not intended to be directly manipulated.

// Even so, it is still possible to reassign _amount:

bankAccount._amount = 1000000;






//*******************************************************
//*******************************************************
//*******************************************************
//*******************************************************




//GETTER METHODS

const person = {
    _firstName: 'John',
    _lastName: 'Doe',
    get fullName() {
        if (this._firstName && this._lastName) {
            return `${this._firstName} ${this._lastName}`;
        } else {
            return 'Missing a first name or a last name.';
        }
    }
}

// To call the getter method: 
person.fullName; // 'John Doe'


//////////////////////////////
//GETTER EXAMPLE

const robot = {
    _model: '1E78V2',
    _energyLevel: 100,
    get energyLevel() {
        if (typeof this._energyLevel === 'numbers') {
            return `My curretn energy level is ${this._energyLevel}%`;
        } else {
            return 'System malfunction: cannot retrieve energy level.';
        }
    }
};

function newInfo(energyLevel) {
    this.energyLevel = energyLevel;
}
let newRobot = new newInfo(42);

console.log(robot.energyLevel());

//1)In robot, create a getter method named energyLevel using the get keyword. Leave function body blank for now.

//2)Inside the getter method, add an if statement to check if this._energyLevel is a number using the typeof operator. If that condition is truthy, return 'My current energy level is ENERGYLEVEL'. Replace ENERGYLEVEL with the value of this._energyLevel.

//Make sure you return the string and not logging it to the console.


//3) If this._energyLevel isn’t a number it could be that the _energyLevel property was altered. Let’s add a default return statement for when such a scenario arises.

//Add an else statement that returns 'System malfunction: cannot retrieve energy level'.


//4) Log the result of calling the getter method energyLevel on robot to the console.

//Notice that the method will return a formatted response rather than just accessing a property!



//SETTER METHODS!!!!!!

//Along with getter methods, we can also create setter methods which reassign values of existing properties within an object. Let’s see an example of a setter method:

const person = {
    _age: 37,
    set age(newAge) {
        if (typeof newAge === 'number') {
            this._age = newAge;
        } else {
            console.log('You must assign a number to age');
        }
    }
};



//EXAMPLE SETTERS
const robot = {
    _model: '1E78V2',
    _energyLevel: 100,
    _numOfSensors: 15,
    set sensorsNumber(num) {
        if (typeof num === 'number' && num >= 0) {
            this._numOfSensors = num;
        }
    },
    get numOfSensors() {
        if (typeof this._numOfSensors === 'number') {
            return this._numOfSensors;
        } else {
            return 'Sensors are currently down.'
        }
    },


};

robot.sensorsNumber(100);
console.log(robot.numOfSensors);

//1)Currently, in robot there is a getter method for numOfSensors but no setter method! What if we need to add or remove some sensors? Let’s fix that problem.
//Add a setter method named numOfSensors using the set keyword. Provide a parameter of num. Leave the function body empty for now.

//2)There are a couple of things we should do in the setter method:
// Add a check to see if num is a number using the typeof operator.
// num should also be greater than or equal to 0.
// If both conditions are met, reassign this._numOfSensors to num.

// Now add an else that logs 'Pass in a number that is greater than or equal to 0' to the console.
// Use the numOfSensors setter method on robot to assign _numOfSensors to 100.
// To check that the setter method worked, console.log() robot.numOfSensors.


//EXTRA *********************************************************************************************************************************

//FACTORY FUNCTIONS
const monsterFactory = (name, age, energySource, catchPhrase) => {
    return {
        name: name,
        age: age,
        energySource: energySource,
        scare() {
            console.log(catchPhrase);
        }
    }
};

//In the monsterFactory function above, it has four parameters and returns an object that has the properties: name, age, energySource, and scare(). To make an object that represents a specific monster like a ghost, we can call monsterFactory with the necessary arguments and assign the return value to a variable:


const ghost = monsterFactory('Ghouly', 251, 'ectoplasm', 'BOO!');
ghost.scare(); // 'BOO!'


//Now we have a ghost object as a result of calling monsterFactory() with the needed arguments. With monsterFactory in place, we don’t have to create an object literal every time we need a new monster. Instead, we can invoke the monsterFactory function with the necessary arguments to take over the world make a monster for us!

//EXERCISE 
// 1)Instead of making individual robots like we’ve been doing, let’s make a factory function to make robots as we please!
// Create a factory function named robotFactory that has two parameters model and mobile. Make the function return an object. In the object, add a key of model with the value of the model parameter. Add another property that has a key of mobile with a value of the mobile parameter.
// Then add a method named beep without a parameter that will log 'Beep Boop' to the console.
//2)Use your factory function by declaring a const variable named tinCan. Assign to tinCan the value of calling robotFactory with the first argument of 'P-500' and the second argument of true.
//3)Let’s now check what tinCan can do! Call .beep() on tinCan.
// 

const robotFactory = (model, mobile) => {
    return {
        model: model,
        mobile: mobile,
        beep() {
            console.log('Beep Boop');
        }
    }
}

const tinTan = robotFactory('P-500', true);
console.log(tinTan.beep());

//NEW TOPIC: DESTRCUTURED ASSIGNMENT
//We often want to extract key-value pairs from objects and save them as variables. Take for example the following object:

const vampire = {
    name: 'Dracula',
    residence: 'Transylvania',
    preferences: {
        day: 'stay inside',
        night: 'satisfy appetite'
    }
};

//If we wanted to extract the residence property as a variable, we could using the following code:

const residence = vampire.residence;
console.log(residence); // Prints 'Transylvania' 

//However, we can also take advantage of a destructuring technique called destructured assignment to save ourselves some keystrokes. In destructured assignment we create a variable with the name of an object’s key that is wrapped in curly braces { } and assign to it the object. Take a look at the example below:

const { residence } = vampire;
console.log(residence); // Prints 'Transylvania'

//EXERCISE DESTRUCTURED ASSIGNMENT

const robot = {
    model: '1E78V2',
    energyLevel: 100,
    functionality: {
        beep() {
            console.log('Beep Boop');
        },
        fireLaser() {
            console.log('Pew Pew');
        },
    }
};

const { functionality } = robot;
functionality.beep();

//1)Use destructured assignment to create a const variable named functionality that extracts the functionality property of robot.
//If you need a reminder on how to use destructured assignment, review the example in the narrative or check the hint.

//2) Since functionality is referencing robot.functionality we can call the methods available to robot.functionality simply through functionality.
//Take advantage of this shortcut and call the .beep() method on functionality.



//BUILT-IN OBJECT METHODS
//In the previous exercises we’ve been creating instances of objects that have their own methods. But, we can also take advantage of built-in methods for Objects!
//For example, we have access to object instance methods like: .hasOwnProperty(), .valueOf(), and many more! Practice your documentation reading skills and check out: MDN’s object instance documentation.
//There are also useful Object class methods such as Object.assign(), Object.entries(), and Object.keys() just to name a few. For a comprehensive list, browse: MDN’s object instance documentation.


const robot = {
    model: 'SAL-1000',
    mobile: true,
    sentient: false,
    armor: 'Steel-plated',
    energyLevel: 75
};

// What is missing in the following method call?
const robotKeys = Object.keys(robot);

console.log(robotKeys);

// Declare robotEntries below this line:
const robotEntries = Object.entries(robot);

console.log(robotEntries);

// Declare newRobot below this line:
const newRobot = robot;
newRobot = Object.assign({ laserBlaster: true, voiceRecognition: true });

console.log(newRobot);

  //1) In main.js there is an object, robot. We’d like to grab the property names, otherwise known as keys, and save the keys in an array which is assigned to robotKeys. However, there’s something missing in the method call.
  //Find out what we have to include by reading MDN’s Object.keys() documentation.

  //2)Object.entries() will also return an array, but the array will contain more arrays that have both the key and value of the properties in an object.
  //Declare a const variable named robotEntries and assign to it the entries of robot by calling Object.entries().
  //To find how to use Object.entries(), read the documentation at MDN.

  //3)Now what if we want another object that has the properties of robot but with a few additional properties. Object.assign() sounds like a great method to use, but like the previous examples we should check Object.assign() documentation at MDN.
  //Declare a const variable named newRobot. newRobot will be a new object that has all the properties of robot and the properties in the following object: {laserBlaster: true, voiceRecognition: true}. Make sure that you are not changing the robot object!


  //REVIEW
  // Let’s review the concepts covered:

  // The object that a method belongs to is called the calling object.
  // The this keyword refers the calling object and can be used to access properties of the calling object.
  // Methods do not automatically have access to other internal properties of the calling object.
  // The value of this depends on where the this is being accessed from.
  // We cannot use arrow functions as methods if we want to access other internal properties.
  // JavaScript objects do not have built-in privacy, rather there are conventions to follow to notify other developers about the intent of the code.
  // The usage of an underscore before a property name means that the original developer did not intend for that property to be directly changed.
  // Setters and getter methods allow for more detailed ways of accessing and assigning properties.
  // Factory functions allow us to create object instances quickly and repeatedly.
  // There are different ways to use object destructuring: one way is the property value shorthand and another is destructured assignment.
  // As with any concept, it is a good skill to learn how to use the documentation with objects!
  // You’re ready to start leveraging more elegant code for creating and accessing objects in your code!


  // If you want to challenge yourself:

  // Find the value of this in a function inside of a method.
  // Learn the outcome of using a property that has the exact same name as a setter/getter method.
  // Create a new factory function that can create object instances of your choice.
  // Read documentation on other destructuring techniques and apply it to your code.
  // Try out other built-in object methods and learn what they do.