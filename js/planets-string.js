(function(){
    "use strict";

    var planetsString = "Mercury|Venus|Earth|Mars|Jupiter|Saturn|Uranus|Neptune";
    var planetsArray;

    /**
     * TODO:
     * Convert planetsString to an array, and save it in a variable named
     * planetsArray.
     * console.log planetsArray to check your work
     */

    var planetsArray = [planetsString];

    console.log(planetsArray);

    /**
     * TODO:
     * Create a string with <br> tags between each planet. console.log() your
     * results. Why might this be useful?
     *
     * BONUS:
     * Create another string that would display your planets in an undordered
     * list. You will need an opening AND closing <ul> tags around the entire
     * string, and <li> tags around each planet.
     */

    var planetsSplit = planetsString.split("|");

    console.log(planetsSplit);

    var planetsBreak = "Mercury <br> Venus <br> Earth <br> Mars <br> Jupiter <br> Saturn <br> Uranus <br> Neptune"
    console.log(planetsBreak);

    ////////////////////////////// Bonus //////////////////////////////////

    for (var i=planetsSplit.length; i--;) {
        planetsSplit[i] = '<li>' + planetsSplit[i] + '</li>';
    }

    planetsSplit.unshift('<ul>');
    planetsSplit.push('</ul>');

    console.log(planetsSplit);
     var planetsList = planetsSplit.join('');

    document.body.innerHTML = planetsList;
})();
