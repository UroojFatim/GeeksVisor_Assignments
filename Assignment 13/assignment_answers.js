// Q1) Create a program that prints the numbers from 1 to 10.

console.log("Question 1")
for (let i = 1; i <= 10; i++) {
    console.log(i);
  }
  


//   Q2) Print the numbers from 10 down to 1 in reverse order.

console.log("Question 2")
for (let i = 10; i >= 1; i--) {
    console.log(i);
  }


  
//   Q3) Print the elements of an array using a for loop with their index number: [ 'apple', 'banana', 'cherry', 'date' ].

console.log("Question 3")
const fruits = ['apple', 'banana', 'cherry', 'date'];

for (let i = 0; i < fruits.length; i++) {
  console.log(`${i} - ${fruits[i]}`);
}



// Q4) Print the table of 2 in correct order from 2 to 10 using a for loop.

console.log("Question 4")
const number = 2;

for (let i = 1; i <= 10; i++) {
  console.log(`${number} x ${i} = ${number * i}`);
}



// Q5) Print the table of 2 in reverse order from 10 to 1 using a for loop.

console.log("Question 5")
const number1 = 2;

for (let i = 10; i >= 1; i--) {
  console.log(`${number} x ${i} = ${number * i}`);
}




// Q6) Calculate the sum of numbers from 1 to 5 using a for loop.

console.log("Question 6")
let sum = 0;

for (let i = 1; i <= 5; i++) {
  sum += i;
}

console.log("Sum:", sum);



// Q7) Print the even numbers from 2 to 10. (Hint: use if else to find the even numbers with for loop)

console.log("Question 7")
for (let i = 2; i <= 10; i++) {
    if (i % 2 === 0) {
      console.log(i);
    }
  }




//   Q8) Print the odd numbers from 1 to 10. (Hint: use if else to find the odd numbers with for loop)
  
console.log("Question 8")
for (let i = 1; i <= 10; i++) {
    if (i % 2 !== 0) {
      console.log(i);
    }
  }
  


//   Q9) Create a program that prints the squares of numbers from 1 to 5.

console.log("Question 9")
for (let i = 1; i <= 5; i++) {
    console.log(i * i);
  }
  



//   Q10) Count the number of even numbers from 1 to 20 using a for loop.

console.log("Question 10")
let countEven = 0;

for (let i = 1; i <= 20; i++) {
  if (i % 2 === 0) {
    countEven++;
  }
}

console.log("Count of even numbers:", countEven);
