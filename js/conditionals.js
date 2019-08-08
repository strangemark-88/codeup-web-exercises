"use strict";

/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number.
 *
 * If they click 'Ok', prompt the user for a number,
 *
 * then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 *
 * - what the number plus 100 is
 *
 * - if the number is negative or positive
 *
 * if what the user enters is not a number, use an alert to tell them that, and
 * do *not* display any of the above information.
 *
 * Can you refactor your code to use functions?
 */

// function askUser() {
//     var questionNum = confirm("Would you like to enter a number?");
//
//     if(questionNum) {
//         var enteredNum = +prompt("Enter a number!");
//         if(enteredNum % 2 === 0) {
//             alert("Your number is Even");
//             alert("Your number plus 100 is: " + (enteredNum + 100));
//             posNeg(enteredNum)
//         } else {
//             alert("Your number is Odd");
//             alert("Your number plus 100 is: " + (enteredNum + 100));
//             posNeg(enteredNum)
//         }
//     }
//     function posNeg(num) {
//         if(num > 0) {
//             alert("Your number is positive!");
//         } else {
//             alert("Your number is negative!");
//         }
//     }
// }
// askUser();

var askForNumber = confirm("Would you like to enter a number?");


function askUserForNumber(userInput) {
    if(userInput === true){
        var num = +prompt("Enter a number");

        if (isNaN(num)){
               return alert('thats a not number')
            } else{
                alert('thats a number');
                isEvenOdd(num);
                addHundred(num);
                posOrNeg(num);
            }


    } else {
        alert("ok then")
    }
}
askUserForNumber(askForNumber);

function isEvenOdd(num) {
    if (num % 2 === 0) {
        return alert("Your number is Even");
    } else {
        return alert("Your number is Odd");
    }
}
function addHundred(num){
    return alert('your number plus 100 is ' + (num + 100));
}

function posOrNeg(num) {
    if(Math.sign(num) === 1){
        return alert('thats positive')
    } else{
        return alert('thats negative')
    }
}


/* ########################################################################## */

/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input.
 *
 * This function should return a message that related to that
 * color.
 *
 * Only worry about the colors defined above, if the color passed is not
 * one of the ones defined above, return a message that says so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */

// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color everytime the page loads)
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var randomColor = colors[Math.floor(Math.random() * colors.length)];

// function analyzeColor(colorName) {
//
//     if(colorName === 'red'){
//         console.log("strawberries are red");
//     } else if(colorName ==='orange'){
//         console.log('oranges are orange');
//     } else if(colorName ==='yellow'){
//         console.log('lemons are yellow');
//     } else if(colorName ==='green'){
//         console.log('grass is green');
//     } else if(colorName ==='blue'){
//         console.log('the sky is blue');
//     } else if(colorName ==='indigo'){
//         console.log('indigo');
//     } else if(colorName ==='violet'){
//         console.log('violets are violet');
//     }
// }
// analyzeColor(randomColor);

/**
 * TODO:
 * Pass the `randomColor` variable to your function and console.log the results.
 * You should see a different message everytime you refresh the page
 */
//done
/**
 * TODO:
 * Refactor your above function to use a switch-case statement
 */
// function analyzeColor(colorName) {
//     switch (colorName) {
//         case 'red':
//             return 'strawberries are red';
//
//         case 'orange':
//             return 'oranges are orange';
//
//         case 'yellow':
//             return 'lemons are yellow';
//
//         case 'green':
//             return 'limes are green';
//
//         case 'blue':
//             return 'blueberries are blue';
//
//         case 'indigo':
//             return 'indigo is a color';
//
//         case 'violet':
//             return 'violets are violet';
//
//     }
// }
// console.log(analyzeColor(randomColor));
/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */
// console.log(analyzeColor(prompt('please enter a color')));

/* ########################################################################## */

/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5.
 *
 * If your lucky number is 0 you have no discount,
 * if your lucky number is 1 you'll get a 10% discount,
 * if it's 2, the discount is 25%,
 * if it's 3, 35%,
 * if it's 4, 50%, and
 * if it's 5 you'll get
 * all for free!.
 *
 * Write a function named `calculateTotal` that accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */

// function calculateTotal(luckNum, totalAmt) {
//     if(luckNum === 1){
//         return totalAmt - (totalAmt * .1);
//
//     } else if(luckNum === 2){
//         return totalAmt - (totalAmt * .25);
//
//     } else if(luckNum === 3){
//         return totalAmt - (totalAmt * .35);
//
//     } else if(luckNum === 4){
//         return totalAmt - (totalAmt * .5);
//
//     } else if(luckNum === 5){
//         return totalAmt - totalAmt;
//     }
// }
// console.log(calculateTotal(5, 100));

/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 6.
 *
 * Prompt the user for their total bill,
 *
 * then use your `calculateTotal` function
 *
 * and alerts to display to the user what their lucky number was,
 *
 * what their price before the discount was,
 *
 * and what their price after the discount is.
 */
// // Generate a random number between 0 and 6
// var luckyNumber = Math.floor(Math.random() * 6);
//
// // console.log(calculateTotal(luckyNumber, +prompt('What was your total bill?')));
// // console.log(luckyNumber);
// // alert(luckyNumber + ' is your lucky number');
//
// var totalBill = +prompt('what was your total bill?');
//
// function calculateTotal(luckNum, totalAmt) {
//     if(luckNum === 1){
//         return totalAmt - (totalAmt * .1);
//
//     } else if(luckNum === 2){
//         return totalAmt - (totalAmt * .25);
//
//     } else if(luckNum === 3){
//         return totalAmt - (totalAmt * .35);
//
//     } else if(luckNum === 4){
//         return totalAmt - (totalAmt * .5);
//
//     } else if(luckNum === 5){
//         return totalAmt - totalAmt;
//     }
// }
// // console.log(calculateTotal(luckyNumber, totalBill));
//
// var discountPrice = calculateTotal(luckyNumber, totalBill);
//
// function userAlerts(luckyNumber, totalBill, discountPrice){
//
//     alert(luckyNumber + ' is your lucky number');
//     alert(totalBill + ' is your price before discount');
//     alert(discountPrice + ' is your price after discount');
//
// }
// (userAlerts(luckyNumber, totalBill, discountPrice));