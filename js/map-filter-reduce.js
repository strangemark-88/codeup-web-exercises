const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];


// Use .filter to create an array of user objects
// where each user object has at least 3 languages in the languages array.

let userLanguage = users.filter(function (user) {
   return user.languages.length >= 3;
});


// Use .map to create an array of strings where each element is a user's email address

let userEmails = users.map(function (user) {
    return user.email;
});

// Use .reduce to get the total years of experience from the list of users. 
// Once you get the total of years you can use the result to calculate the average.

let userExp = users.reduce(function (total, user) {
    return total + user.yearsOfExperience;
}, 0)/users.length;



// Use .reduce to get the longest email from the list of users.


// let longestEmail = users.reduce(function (total, user) { return total.email.length > user.email.length ? total.email : user; });

let longestEmail = users.reduce(function (total, user) {

    if( total.email.length > user.email.length){

        return total.email

    }else {

        return user
    }
});



// Use .reduce to get the list of user's names in a single string.
// Example: Your instructors are: ryan, luis, zach, fernando, justin.

// let userNames = users.reduce(function (final, names) {
//     return final + `${names.name}, `
// }, '');

let usersName = users.reduce( function(finalString, user, index) {
    if(index === users.length -1){
        return finalString + `${user.name}.`
    }
    else{
        return finalString + `${user.name}, `
    }
}, 'Your instructors are:  ');


// console.log(userNames);
/////////////////////////////////////////////////////////////

// Bonus?
//Use .reduce to get the unique list of languages from the list of users

