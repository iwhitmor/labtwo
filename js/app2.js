'use strict';
console.log('app2.js file is connected');

let favoriteSport = prompt('Is my favorite sport golf?');
let lowerCaseSport = favoriteSport.toLowerCase();
if (lowerCaseSport === 'yes' || lowerCaseSport === 'y') {
  alert('DING DING DING, correct!');
} else {
  alert('BOOOO, wrong!');
}

let favoriteFood = prompt('Is my favorite food tuna fish in a can?');
let lowerCaseFood = favoriteFood.toLowerCase();
if (lowerCaseFood === 'no' || lowerCaseFood === 'n') {
  alert('DING DING DING, correct!');
} else {
  alert('BOOOO, wrong!');
} 
console.log('Answer to favorite food', lowerCaseFood)

let stateBorn = prompt('Was I born in New York State?');
let lowerCaseBorn = stateBorn.toLowerCase();
if (lowerCaseBorn === 'yes' || lowerCaseBorn === 'y') {
  alert('DING DING DING, correct!');
} else {
  alert('BOOOO, wrong!');
}

let favoriteMusic = prompt('Is my favorite type of music Reggae?');
let lowerCaseMusic = favoriteMusic.toLowerCase();
if (lowerCaseMusic === 'yes' || lowerCaseMusic === 'y') {
  alert('DING DING DING, correct!');
} else {
  alert('BOOOO, wrong!');
}

let dominantHand = prompt('Am and right handed?');
let lowerCaseHand = dominantHand.toLowerCase();
if (lowerCaseHand === 'no' || lowerCaseHand === 'n') {
  alert('DING DING DING, correct!');
} else {
  alert('BOOOO, wrong!');
}

alert('Ok, enough questions about me. Lets play a number guessing game!');

let attempts = 6;
let actualNumber = 11;

while(attempts > 0){

  let userNumber = prompt('Can you guess what number I am thinking of between 1 and 100? You only have 6 guesses to guess correctly.', '<number goes here>');
  console.log(typeof(userNumber));
  userNumber = parseInt(userNumber);
  console.log('the string after parseInt ',userNumber);
  if(!userNumber){
    break;
  }

  if(userNumber > actualNumber){
    alert('That guess was too high. Try again!');
  } else if (userNumber < actualNumber){
    alert('That guess was too low. Try again!');
  } else {
    alert('You got it right. Nice job!');
    console.log('did this work? they guessed right.');
    break;
  }

  attempts = attempts - 1;
}

alert('Your all done. The correct answer was 11');
