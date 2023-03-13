
/** 
=============== Math methods ===============================
1. Math.PI
2. Math.round
3. Math.pow
4. Math.sqrt
5. Math.ceil
6. Math.floor
7. Math.random
*/

console.log(Math.PI);
console.log(Math.round(5.37));
console.log(Math.pow(2, 3));
console.log(Math.sqrt(49));
console.log(Math.ceil(1.1));
console.log(Math.floor(1.9));
console.log(Math.random());

/** 
=============================== String Methods =======================
1. String Length
2. indexOf
3. uppercase
4. lowercase
5. split
6. slice
7. includes

var abc = "abcdefghijklmnopqrstuvwxyz";
*/
let abc = "abcdefghijklmnopqrstuvwxyz";
console.log("String length: ", abc.length); //no in string
console.log(abc.indexOf("lmno"));

const name = "envelopes";
console.log(name.indexOf("lopes"));

console.log(abc.toUpperCase());
console.log(name.toLowerCase());

let cities = "Kathmandu, Manchester, Delhi, Barcelona";
let newCities = cities.split(",");
console.log(newCities);

console.log(cities.slice(0, 12));
console.log(cities.includes("Kathmandu"));

/** 
================= Array methods ============================
1. Convert to string = .toString()
2. Join items in array = .join("_")
3. Remove last element = .pop()
4. Length of array = .length
5. reverses the order = .reverse
*/

console.log(newCities.toString());
console.log(newCities.join("-"));
console.log(newCities.length);
console.log(newCities.pop()); /**last ko element pop garne*/
console.log(newCities.reverse());
console.log(newCities.push("Barcelona"));


/** 
================= Date Object ===================================
1. new Date();
2. Get hour from date object
3. Get Minutes
4. get Year
5. 
*/
let currentDate = new Date();
console.log(currentDate)
console.log(currentDate.getHours())
console.log(currentDate.getMinutes())
console.log(currentDate.getFullYear());

console.log(Date.now());

let time = 1678903781101;
console.log(time);
console.log(new Date(time));



=======
/** Printing Hello World in Javascript console */

console.log("hello wold");
console.log('single quote');
console.log(`hello from backtick ${1 + 1}`);
/*semicolon not necessary*/



/* ================== Data Types ========================
 There are eight basic data types in javascript.
  1. String
  2. Number
  3. Boolean
  4. Object
  5. Null
  6. Undefined
  7. Symbol
  8. BigInt
*/

/** ============ String ======================
Anything inside the quotation marks is a string.
There are three diffrent types of quotation marks:
1. Double Quotation ("")
2. Single Quotation ('')
3. Backtick Quotation (``);

There is no diffrence between 1 and 2. But with backtick quotation we can write javascript quote inside using ${} symbol.
*/


/** ================== Numbers ======================
  There is no separate integer or floating point number in javascript.      Every mathematical number is of Number data type in js.
*/
console.log(3.3);
console.log(-1);


/** ============== Boolean =========================
  Takes one of the two values: true or false
*/

console.log(true);
console.log(false);

/**============== How to check data type ===========
 typeof operator is used to check the data type of a data
 */
console.log(typeof "joe Root")
console.log(typeof 2.20);
/**======================variable=======================*/
let name = "Joe Root";
let over = 10;
let win = true;


console.log(name);
console.log(name);

win = false;
console.log(win);

/** constant */
const birth_year = "1998";
const PI = 3.14159;


let israining = true;
let isgoingtorain = true;

if (israining) {
  console.log("Take an umbrella");
}
else if (isgoingtorain) {
  console.log("Go with an umbrella");
}
if (israining == false) {
  console.log("Go without an umbrella");
}
/**   in case of writing same strng we can call using let
console.log("Joe Root");
console.log("Joe Root");*/

/* =============== If Statement =====================
*/

/** ================ Comparision Operators ====================
  1. is greater than (>)
  2. is less than (<)
  3. is equal to (==)
  4. is strictly equal to (===)
  5. is greater than or equal to (>=)
  6. is less than or equal to (<=)

*/
const num = 0;
if (num > 0) {
  console.log("Positive");
}
else if (num < 0) {
  console.log("Neag");
}
else if (num === 0) {
  console.log("ZERO");
}


/**  Create a grade calculator that prints "Distinction" if grade is greater than or equal to 80, "First Division" if grade is greater than or equal to 60 and less than 80, "Second Division" if grade is greater than 50 and less than 60, otherwise "Fail" 
*/

const grade = 40;
if (grade >= 80) {
  console.log("Distincion");
}
else if (grade >= 60 && grade < 80) {
  console.log("First division");
}

else if (grade >= 50 && grade < 60) {
  console.log("Second division");

}
else {
  console.log("fail");
}


/* ================= Logical Operators ====================== 
1. AND Operator (&&) returns true if all conditions are true
2. OR Operaor (||) returns true if one of the conditions is true
3. NOT Operator (!) returns opposite of the given value
*/

let HaveTOGoOutside = true;
if (israining && HaveTOGoOutside) {
  console.log("Take Umbrella");

}

if (israining || isgoingtorain) {
  console.log("Take Umbrella");
}

console.log(!false);

/* ============== For Loops ==============================
Used when same task is being done multiple times.  Like printing a name 100 times.
for (starting_statement; stopping_condition; action) {
  // some task
}
*/
/** let starting_point = 0;


for (starting_point; starting_point < 10; starting_point = starting_point + 1)/** (start; end; stop)  {
  console.log(name);
}*/

let starting_point = 10;
for (starting_point; starting_point >= 0; starting_point = starting_point - 1)/** (start; end; stop) */ {
  console.log(name);
}


/* ========================= While Loops ====================== 
  Same use cases as for loops.
  // starting condition
  while(stopping_condition) {
    // some task
    // action
  }
*/
let start = 0;
while (start < 10) {
  console.log(start);
  start = start + 1;
}

/**  ====================== Functions ============================
  Functions are like machines that takes some input, process them and produce some output.
  
  function name_of_function(input) {
    return output;
  }

  

*/
function printer(name) {
  /**  console.log ('your name is ${name}')*/
  return `your name is ${name}` /** need backtick to work */
}
let output = printer("kate");
console.log(output);

/** anonymous fxn */
function add(num1, num2) {
  return num1 + num2;
}

let result = add(5, 6);
console.log(result);

/** arrow fxn */
const subtract = (num1,num2) => num1 - num2 ;

let subtraction = subtract(10,2);
console.log(subtraction)


 /**   {
    return num1 -num2;
  }    
  no nedd  curly bracket*/

/* ==================== Object =====================================
Object are like collection of diffrent data. Like in real world, everything is an object and every object has some properties. Like car is a object and has properties like color, brandName, Model etc.
Similarly, Object is Javascript is just like real world objects that has some properties and values.
*/

const student =
  {
    name: "asd",
    roll: 21,
    greet: function()
      {
        console.log("good morning");
      }
  }

console.log(student.name, student.roll)
console.log(student.greet())



 /**   const car =
    {
      model: "BHW",
      color: "red",
    }
    return "brrrr";
}*/

/* ============================= Array ============================
Arrays are also the collection of diffrent data, but unlike objects they don't need properties to store data.
let favorite_animes = ["Death Note", "Steins Gate", "Classroom of Elite"];
*/
const fruits = ["apple", "guava" , 123, {id:1}];
fruits.push("stra");
fruits.pop("apple");

const top_10_movies =[
  {
    id:1,
    name: "aftersun" ,
    genre: "drama" ,
    
  },

  {
    id: 2,
    name: "Before sunrise",
    genre: "romance",
    
  }
    ]
    console.log(top_10_movies[0].name);
console.log(typeof top_10_movies);

/**  Problem 1
Write a function named "fullName" that takes input "firstName" and "lastName" and returns the fullName;
*/

/** Problem 2 
Write a function named "reverseMachine" that takes some string as input and return the reverse of that string.
Like: input = "dog" output = "god"

*/

