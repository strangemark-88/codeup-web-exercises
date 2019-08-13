"use strict";



var input, parsedInput = 0;

do {
    input = prompt("Please enter an odd number between 1-50");
    parsedInput = parseInt(input);

} while(isNaN(parsedInput) || parsedInput < 0 || parsedInput % 2 === 0);


for (var x = 1; x < 50; x+=2) {

    if(parsedInput === x){
        console.log('Yikes! Skipping number: ' + parsedInput);
        continue;
    }
    else{
        console.log('Here is an odd Number: ' + x);
        if(x >= 49){
            break;
        }
    }
}

//////////////////////////////////////////////////////////////////////////////////////////////