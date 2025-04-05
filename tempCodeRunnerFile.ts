// const people = [
//   { name: "Alice", age: 25 },
//   { name: "Bob", age: 30 },
//   { name: "Charlie", age: 35 }
// ];

// Task: Create an array of just the names from the people array.

const numbers = [5, 10, 15, 20, 25];
let sum = numbers.map(function(el){
  return el+el;
})
console.log(sum);

// Task: Calculate the sum of all the numbers in the array.

// Count Specific Items

// Given an array of strings, count how many times a specific string (e.g., "apple") appears in the array.