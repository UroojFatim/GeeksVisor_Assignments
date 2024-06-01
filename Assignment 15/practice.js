// Function 1
console.log("Question 1")
function add(a, b) {
    return a + b;
  }

  const sum = add(3, 4);
  console.log(sum); 

  

// Function 2
console.log("Question 2")
function multiply(a = 1, b = 1) {
    return a * b;
  }
  
  console.log(multiply(5, 3)); 
  console.log(multiply(5));  
  console.log(multiply());     

  

// Function 3
console.log("Question 3")
function createArray(n) {
    const arr = [];
    for (let i = 1; i <= n; i++) {
      arr.push(i);
    }
    return arr;
  }
  
  const myArray = createArray(5);
  console.log(myArray); 

  

// Function 4
console.log("Question 4")
function isEvenOrOdd(number) {
    if (number % 2 === 0) {
      return 'Even';
    } else {
      return 'Odd';
    }
  }
  
  console.log(isEvenOrOdd(4)); 
  console.log(isEvenOrOdd(7)); 

  

// Function 5
console.log("Question 5")
const square = (n) => n * n;

console.log(square(5));



// Function 6
console.log("Question 6")
const subtract = function(a, b) {
    return a - b;
  };
  
  console.log(subtract(10, 3)); 

  

// Function 7
console.log("Question 7")
function applyFunction(func, value) {
    return func(value);
  }
  
  function double(n) {
    return n * 2;
  }
  
  const result = applyFunction(double, 5);
  console.log(result);

  

// Function 8
console.log("Question 8")
function sumAll(...numbers) {
    return numbers.reduce((acc, current) => acc + current, 0);
  }
  
  console.log(sumAll(1, 2, 3)); 
  console.log(sumAll(4, 5, 6, 7)); 

  



