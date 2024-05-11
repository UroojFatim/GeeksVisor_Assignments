// Q:1) Use 3 prompts to ask the user for their country, city, and area. If they are in "Pakistan, Karachi and Defence" display "Welcome." If not, display "Invalid area".


var country = prompt("Enter your country:");
var city = prompt("Enter your city:");
var area = prompt("Enter your area:");

if (country.toLowerCase() === "pakistan" && city.toLowerCase() === "karachi" && area.toLowerCase() === "defence") {
    alert("Welcome.");
} else {
    alert("Invalid area");
}



// Q:2) Create a JavaScript program using a prompt to ask the user if they prefer tea or coffee, if they prefer coffee display msg ‘here is your coffee’, if they prefer tea display msg ‘here is your tea’, and if they write anything else display ‘something went wrong’. Users can choose tea or coffee in any case format (uppercase or lowercase) like TEA, TeA, tEa, cofFeE, CoFfee etc.


var preference = prompt("Do you prefer tea or coffee?").toLowerCase();

if (preference === "coffee") {
    alert("Here is your coffee");
} else if (preference === "tea") {
    alert("Here is your tea");
} else {
    alert("Something went wrong");
}



// Q:3) Develop a JavaScript program using a prompt to ask the user if they have a membership (Yes / No) and if they are a student (Yes / No). If at least one condition is true, display "You qualify for a discount." Otherwise, print "Sorry, no discount for you."


var membership = prompt("Do you have a membership? (Yes/No)").toLowerCase();
var student = prompt("Are you a student? (Yes/No)").toLowerCase();

if (membership === "yes" || student === "yes") {
    alert("You qualify for a discount.");
} else {
    alert("Sorry, no discount for you.");
}



// Q:4) Create a JavaScript program using the prompt function. Ask the user for their age and whether they have a valid ID. to be eligible they should be older than 18 and have a valid ID. I both conditions are true, display "You are eligible." Otherwise, print "Sorry, you are not eligible."


var age = parseInt(prompt("Enter your age:"));
var hasValidID = prompt("Do you have a valid ID? (Yes/No)").toLowerCase();

if (age > 18 && hasValidID === "yes") {
    alert("You are eligible.");
} else {
    alert("Sorry, you are not eligible.");
}



// Q:5) Write a short JavaScript program using if-else, decide if you'll go shopping or not . If either your father is paying or there's a sale, print "You will go shopping," otherwise, print "You will not go shopping”.


var fatherPaying = prompt("Is your father paying? (True/False)").toLowerCase();
var sale = prompt("Is there a sale? (True/False)").toLowerCase();

if (fatherPaying === "true" || sale === "true") {
    alert("You will go shopping.");
} else {
    alert("You will not go shopping.");
}



// Q:6) Ask the user for their age and if they have their own Car using prompt. if the user is older than 17 years and owns a car then Display “you can drive and you own a car," otherwise, print "you can not drive a car."


var age = parseInt(prompt("Enter your age:"));
var ownCar = prompt("Do you own a car? (Yes/No)").toLowerCase();

if (age > 17 && ownCar === "yes") {
    alert("You can drive and you own a car.");
} else {
    alert("You cannot drive a car.");
}



// Q:7) Write a program that prompts the user for a number representing a day of the week (1 for Monday, 2 for Tuesday, etc.). Use an if and else if chain to display the corresponding day name.


var dayNumber = parseInt(prompt("Enter a number representing a day of the week"));

if (dayNumber === 1) {
    alert("Monday");
} else if (dayNumber === 2) {
    alert("Tuesday");
} else if (dayNumber === 3) {
    alert("Wednesday");
} else if (dayNumber === 4) {
    alert("Thursday");
} else if (dayNumber === 5) {
    alert("Friday");
} else if (dayNumber === 6) {
    alert("Saturday");
} else if (dayNumber === 7) {
    alert("Sunday");
} else {
    alert("Invalid input. Please enter a number between 1 and 7.");
}



// Q:8) Simulate a traffic light using if and else statements Display the appropriate message based on user. input Users can choose Red, Yellow and green in any case format i.e rEd, reD, gReeN etc.


var userInput = prompt("Enter the color of the traffic light (Red, Yellow, or Green):").toLowerCase();

if (userInput === "red") {
    alert("Stop!");
} else if (userInput === "yellow") {
    alert("Slow down.");
} else if (userInput === "green") {
    alert("Go.");
} else {
    alert("Invalid input.");
}



// Q:9) Ask the user to enter a day of the week. Check if it's a weekday or a weekend day and display an appropriate weekend or weekday message.


var day = prompt("Enter a day of the week:").toLowerCase();

if (day === "saturday" || day === "sunday") {
    alert("It's a Weekend.");
} else if (day === "monday" || day === "tuesday" || day === "wednesday" || day === "thursday" || day === "friday") {
    alert("It's a Weekday.");
} else {
    alert("Invalid input.");
}



// Q:10) Classify a person into different age groups (e.g., child, teenager, adult, senior) based on their age. Here is the range


var ageInput = prompt("Enter your age:");

var age = parseInt(ageInput);

if (isNaN(age)) {
    alert("Something went wrong.");
} else if (age < 1 || age > 150) { 
    alert("Invalid age.");
} else if (age <= 12) { 
    alert("Child");
} else if (age <= 18) { 
    alert("Teenager");
} else if (age <= 65) { 
    alert("Adult");
} else { 
    alert("Senior");
}



