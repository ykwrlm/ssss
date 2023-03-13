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



