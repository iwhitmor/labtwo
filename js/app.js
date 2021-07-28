'use strict';
console.log('app.js file is connected');

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

alert('That was the last question, ' + userName + '. ' + 'You sorta did a great job. Have a nice day!')