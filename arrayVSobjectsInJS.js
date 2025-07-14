#!/usr/bin/env node

// arrays in javascript
// uses square brackets [] to define an array
const array = [1, 2, 3, 4, 5];
// index: 		   0,      1,    2,   3,      4,			5, 				6
const array2 = [
	"miriam",
	2.4,
	true,
	null,
	undefined,
	{ name: "ogaga" },
	[1, 2, 3]
];
// console.log(array2[5])

// objects in javascript
// uses curly braces {} to define an object
// structure of an object is key-value pairs e.g // { key1: value1 }
const object1 = {
	name: "miriam",
	age: 25,
	isStudent: true,
	hobbies: ["reading", "coding"],
	obj1: {sname: "ogaga"}
};
// console.log(object1["hobbies"])
console.log(object1.hobbies)

// datatypes in javascript
// integers or numbers are whole numbers e.g. 1, 2, 3, 4, etc.
// floats are what you know to be decimal numbers e.g // 2.4, 3.14, 0.5, etc.
// strings are text e.g. "hello", "world", "miriam", etc.
// booleans are true or false values
// arrays are collections of values e.g. [1, 2, 3], ["miriam", "ogaga"], etc.
// objects are collections of key-value pairs e.g. { name: "miriam", age: 25, isStudent: true }


// truthy and falsy values
	// falsy values are [], 0, "", null, undefined, NaN
	// truthy values are everything else, including objects, arrays, and functions
