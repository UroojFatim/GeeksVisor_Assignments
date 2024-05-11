// Question 1) : Write a program that checks if a number is even or odd. If it's even, print "Even," otherwise print "Odd."

function checkEvenOrOdd(number) {
    if (number % 2 === 0) {
        console.log(number + " is Even");
    } else {
        console.log(number + " is Odd");
    }
}

checkEvenOrOdd(5); 
checkEvenOrOdd(10); 
checkEvenOrOdd(17); 


// Question 2) : Create a program that asks the user for their age and then determines if they are eligible to vote (age 18 or older). If eligible, print "You can vote," otherwise print "You cannot vote."

var age = parseInt(prompt("Please enter your age:"));
if (age >= 18) {
    console.log("You can vote.");
} else {
    console.log("You cannot vote.");
}


// Question 3) : Create a program that asks the user for two numbers and determines which one is larger. Print the larger number

var firstNumber = parseFloat(prompt("Please enter the first number:"));
var secondNumber = parseFloat(prompt("Please enter the second number:"));

if (firstNumber > secondNumber) {
    console.log("The larger number is: " + firstNumber);
} else if (secondNumber > firstNumber) {
    console.log("The larger number is: " + secondNumber);
} else {
    console.log("Both numbers are equal.");
}


// Question 4): Write a JavaScript program that prompts the user to enter their gender as "male" or "female." If the gender is "female," the program should display "Allowed," and if the gender is "male," it should display "Not Allowed.

var gender = prompt("Please enter your gender (male or female):").toLowerCase();

if (gender === "female") {
    console.log("Allowed");
} else if (gender === "male") {
    console.log("Not Allowed");
} else {
    console.log("Invalid input. Please enter 'male' or 'female'.");
}


// Question 5 ) : Write a JavaScript code snippet using the "if-else" statement to check if a variable temperature is greater than 30 degrees Celsius. If the temperature is greater than 30, display an alert message saying "It's a hot day!" Otherwise, display an alert message saying "The weather is pleasant."

var temperature = 32; 

if (temperature > 30) {
    alert("It's a hot day!");
} else {
    alert("The weather is pleasant.");
}


// Question 6) : Write a JavaScript code snippet that checks if a user is either an admin or a moderator. If the user is an admin or a moderator, display an alert message saying "Access granted." Otherwise, display an alert message saying "Access denied."

var userRole = "admin"; 

if (userRole === "admin" || userRole === "moderator") {
    alert("Access granted.");
} else {
    alert("Access denied.");
}

// Question 7) : Write a JavaScript code snippet to determine a student's grade based on their score.

var score = 75; 

if (score >= 90) {
    console.log("Grade: A");
} else if (score >= 80) {
    console.log("Grade: B");
} else if (score >= 70) {
    console.log("Grade: C");
} else if (score >= 60) {
    console.log("Grade: D");
} else {
    console.log("Grade: F");
}


// Question 8) : Write a JavaScript program that takes a user's age as input. If the age is 18 or older, display "You are an adult," if the age is between 13 and 17 (inclusive), display "You are a teenager," and if the age is 12 or younger, display "You are a child."

var age = parseInt(prompt("Please enter your age:"));

if (age >= 18) {
    console.log("You are an adult.");
} else if (age >= 13 && age <= 17) {
    console.log("You are a teenager.");
} else if (age <= 12) {
    console.log("You are a child.");
} else {
    console.log("Invalid age.");
}


// Question 9) : Write a JavaScript code snippet that determines whether a number is positive, negative, or zero. Use if, else if, and else statements to print one of the following messages:

var number = 10; 

if (number > 0) {
    console.log("The number is positive.");
} else if (number < 0) {
    console.log("The number is negative.");
} else {
    console.log("The number is zero.");
}


// Question 10) : Write a JavaScript code snippet that checks if it's raining and prints a message accordingly.

var isRaining = true; 

if (isRaining) {
    console.log("It's raining. Don't forget your umbrella!");
} else {
    console.log("It's not raining. Enjoy your day!");
}
