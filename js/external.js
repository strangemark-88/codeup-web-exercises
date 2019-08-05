"use strict";

console.log('Hello from external JavaScript!');

alert('Welcome to my Website!');

var userInput = prompt('What is your favorite color?');
alert('Great' + ' ' + userInput + ' ' + 'is my favorite color too!' );

//--------------------------------------------------------

var littleMermaidDaysRented = prompt('How long would your like the rent The Little Mermaid');
var brotherBearDaysRented = prompt('How long would your like the rent Brother Bear');
var herculesDaysRented = prompt('How long would your like the rent Hercules');

var pricePerDayDollars = 3;

var rentalTotal = (Number(littleMermaidDaysRented) + Number(brotherBearDaysRented) + Number(herculesDaysRented)) * pricePerDayDollars;

alert('Your total will be ' + rentalTotal);

// -------------------------------------------------------

var googleHourlyRateDollars = 400;
var amazonHourlyRateDollars = 380;
var facebookHourlyRateDollars = 350;

var googleHours = prompt('How many hours did your work for googles');
var amazonHours = prompt('How many hours did your work for amazon');
var facebookHours = prompt('How many hours did your work for facebook');

var totalPayment = ((Number(googleHours) * googleHourlyRateDollars) + (Number(amazonHours) * amazonHourlyRateDollars) +
    (Number(facebookHours) * facebookHourlyRateDollars));

alert('Your total pay is ' + totalPayment);
// -----------------------------------------------------

var classIsNotFull = confirm('Is the class full?');
var classScheduleDoesNotConflict = confirm('Is there a schedule conflict?');

var studentEnrolled = !classIsNotFull && !classScheduleDoesNotConflict;

alert('Its ' + studentEnrolled + ' you can enroll');

//-----------------------------------

var offerIsValid = confirm('Is the offer still valid?');
var numberOfItems = prompt('How many items did you buy?');
var isPremiumMember = confirm('Are you a premium member?');

var productDiscountApplied = offerIsValid && (isPremiumMember || (Number(numberOfItems) > 2));

alert("It's " + productDiscountApplied + " the discount is applied");
