// Define an array of numbers
const numbers = [1, 2, 3, 4, 5];

// Basic for loop
console.log("Basic for loop:");
for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}

// Reverse loop
console.log("\nReverse for loop:");
for (let i = numbers.length - 1; i >= 0; i--) {
  console.log(numbers[i]);
}

// Loop through odd numbers only
console.log("\nLoop through odd numbers only:");
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 !== 0) {
    console.log(numbers[i]);
  }
}

// Loop through even numbers only
console.log("\nLoop through even numbers only:");
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 === 0) {
    console.log(numbers[i]);
  }
}

// Loop through every other number
console.log("\nLoop through every other number:");
for (let i = 0; i < numbers.length; i += 2) {
  console.log(numbers[i]);
}

// Loop through the array and double each element
console.log("\nDouble each element:");
for (let i = 0; i < numbers.length; i++) {
  numbers[i] *= 2;
}
console.log(numbers); // Print the modified array
