// The most important data type in JavaScript is the Objects.

// An object is a collection of pairs key/value or a string to values map.

const book = {
  topic: 'JavaScript',
  fat: true
}

// You can access the object properties with . or []:

console.log(book.topic) // This is the more simple way to access a key in an object.

const key = 'fat'
console.log(book[key]) // This notation is useful when you need to access dynamically properties of the object with bases on a some variable value.

book.author = 'Carlos' // You can create new properties through assignment.
book.contents = {} // {} is an empty object, without any element.

// JavaScript also accept arrays (numerically indexed lists) of values:

const primes = [2, 3, 5, 7] // An array of 4 values.

console.log(primes[0]) // The first element (index 0) of array.
console.log(primes.length) // Amount of elements on array.
console.log(primes.length-1) // The last element of array.

primes[4] = 9 // You can add a new element through assignment.
primes[0] = 11 // Or changes an existing element through assignment.

// Arrays and Objects may contain others arrays and objects:

const points = [ // An array with 2 elements.
  {x: 0, y: 0}, {x: 1, y: 1} // Each element is a object.
]

const data = { // An object with 1 property.
  trail: [[1,2], [3,4]] // Property value is an array, and array's elements are arrays.
}

// Accessing the first element of array 'trail'
const firstElement = data.trail[0];
console.log(firstElement); // [1, 2]

// Accessing the second element of the first array inside array of the 'trail'
const secondElementOfFirstArray = data.trail[0][1];
console.log(secondElementOfFirstArray); // 2

// The syntax for listing elements in an array between brackets within a object or mapping object properties in an array is known as an Initializing Expression. An Expression is a sentence in JavaScript that can to be 'evaluated' to produce a value. The use of . or [] to refer to object property value or an element of an array is an Expression.

// One of the most common ways to create expressions in JavaScript is by using Operators, as shown below:

console.log(3 + 2) // A simple operator of addition.
console.log(points[1].x - points[0].x ) // More complex operators also work.
console.log("3" + "2") // + adds numbers, or concatenates strings.