'use strict';

// function wait(time){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//                 resolve();
//         }, time)
//     })
// }


// OR

// function wait(time){
//     return new Promise((resolve, reject) => {
//         setTimeout(resolve, time)
//     })
// }
//
//
// wait(1000).then(() => console.log('You\'ll see this after 1 second'));
// wait(3000).then(() => console.log('You\'ll see this after 3 seconds'));

///////////////////////////////////////////////////////////

// fetch('https://swapi.co/api/people/1').then((response) => {
//             return response.json();
//         }).then((data) => {
//             console.log(data);
//         });


////////////////////////////////////////////////////////////

// Create a function that accepts a GitHub username,
//
// and returns a promise that resolves with the date of the last commit that user made


// getting last push///////////////

// function gitUserEvents(username){
//     fetch('https://api.github.com/users/'+ username +'/events', {
//         method: 'GET',
//         headers: {'Authorization': `token ${githubApiKey}`}
//     }).then(response => {
//     return response.json()
//     })
//         .then((data) => {
//             // console.log(new Date(data[0].created_at));
//             console.log(data);
//
//             let dateThing =[];
//
//             data.filter(function (input) {
//                 if(input.type === 'PushEvent'){
//                     dateThing.push(input.created_at);
//                     // console.log(input.created_at);
//                 }
//             });
//             // console.log(dateThing[0]);
//             console.log(new Date(dateThing[0]));
//
//         });
// }



/////////// getting last commit by user

function gitUserEvents(username){
    fetch(`https://api.github.com/users/${username}/events`, {
        method: 'GET',
        headers: {'Authorization': `token ${githubApiKey}`}

    }).then(response => {

    return response.json()
    })
        .then((data) => {
            let repoName = [];

            data.filter(function (input) {

                if(input.type === 'PushEvent' && input.actor.login === username){

                    repoName.push(input.repo.name);
                }
            });

            repoName = repoName[0];

            getLastCommit(repoName, username)
        })

}

gitUserEvents('strangemark-88');


function getLastCommit(repoName, username) {
    fetch(`https://api.github.com/repos/${repoName}/commits`, {
        method: 'GET',
        headers: {'Authorization': `token ${githubApiKey}`}

    }).then(response => {

        return response.json()
    })
        .then((data) => {

        let authorName = [];

            data.filter(function (val) {
                if(val.author.login === username){
                    authorName.push(val.commit.author.date)
                }
            });
                console.log(new Date(authorName[0]))

    })
}

