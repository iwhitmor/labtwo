'use strict';
console.log('app.js file is connected');

// let userName = prompt('What is your name?');
// console.log('This is the user input', userName);

// alert('hello ' + userName);

// let lowerCaseName = userName.toLowerCase();
// console.log('this is bob lowercase', lowerCaseName);

// if(lowerCaseName === 'ian' || lowerCaseName === 'bob'){
//     alert('Welcome back to my page,' + ' ' + userName + '.');
// } else {
//     alert('Welcome new user, to my page')
// }


// Prompt the user a total of exactly five yes or no questions. The user input for the answer must accept either y/n or yes/no responses while taking into consideration case sensitivity by normalizing the user input so that it can be validated (hint: look into the .toUpperCase() or .toLowerCase() functions). Be sure to let the user know if they answered the question correctly by alerting them with a response.


// Display the user’s name back to them in your final message to the user.

let userName = prompt('Please enter your full name', "<name goes here>");
console.log('This is the user full name', userName);

alert('Welcome to my site, ' + userName + '. ' + 'I hope you learn a lot about me today.');

let favoriteSport = prompt('Is my favorite sport golf?');
if (favoriteSport === 'yes' || favoriteSport === 'y') {
  alert('DING DING DING, correct!');
} else {
  alert('BOOOO, wrong!');
}

let favoriteFood = prompt('Is my favorite food tuna fish in a can?');
if (favoriteFood === 'no' || favoriteFood === 'n') {
  alert('DING DING DING, correct!');
} else {
  alert('BOOOO, wrong!');
}

let stateBorn = prompt('Was I born in New York State?');
if (stateBorn === 'yes' || stateBorn === 'y') {
  alert('DING DING DING, correct!');
} else {
  alert('BOOOO, wrong!');
}

let favoriteMusic = prompt('Is my favorite type of music Reggae?');
if (favoriteMusic === 'yes' || favoriteMusic === 'y') {
  alert('DING DING DING, correct!');
} else {
  alert('BOOOO, wrong!');
}

let dominantHand = prompt('Am and right handed?');
if (dominantHand === 'no' || dominantHand === 'n') {
  alert('DING DING DING, correct!');
} else {
  alert('BOOOO, wrong!');
}