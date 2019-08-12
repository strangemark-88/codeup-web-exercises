"use strict";

var x = 2;

while (x <= 65536) {
    console.log(x);
    x = (x * 2);
}

////////////////////// ICE CREAM /////////////////////////////////////


    var allCones = Math.floor(Math.random() * 50) + 50;

do {
    var conesBought = Math.floor(Math.random() * 5) + 1;

    if (conesBought > allCones){
        console.log("Cant't sell " + conesBought + " only have " + allCones);
    }
    else {
        console.log(conesBought + ' cones sold');
        allCones = allCones - conesBought;
    }

} while (allCones > 0){
    console.log('Yay all cones sold')
};



//////////////////////////  ///////////////////////////////////////////
