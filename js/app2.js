'use strict';
console.log('app2.js file is connected');

// let favoriteSport = prompt('Is my favorite sport golf?');
// let lowerCaseSport = favoriteSport.toLowerCase();
// if (lowerCaseSport === 'yes' || lowerCaseSport === 'y') {
//   alert('DING DING DING, correct!');
// } else {
//   alert('BOOOO, wrong!');
// }

// let favoriteFood = prompt('Is my favorite food tuna fish in a can?');
// let lowerCaseFood = favoriteFood.toLowerCase();
// if (lowerCaseFood === 'no' || lowerCaseFood === 'n') {
//   alert('DING DING DING, correct!');
// } else {
//   alert('BOOOO, wrong!');
// }

// let stateBorn = prompt('Was I born in New York State?');
// let lowerCaseBorn = stateBorn.toLowerCase();
// if (lowerCaseBorn === 'yes' || lowerCaseBorn === 'y') {
//   alert('DING DING DING, correct!');
// } else {
//   alert('BOOOO, wrong!');
// }

// let favoriteMusic = prompt('Is my favorite type of music Reggae?');
// let lowerCaseMusic = favoriteMusic.toLowerCase();
// if (lowerCaseMusic === 'yes' || lowerCaseMusic === 'y') {
//   alert('DING DING DING, correct!');
// } else {
//   alert('BOOOO, wrong!');
// }

// let dominantHand = prompt('Am and right handed?');
// let lowerCaseHand = dominantHand.toLowerCase();
// if (lowerCaseHand === 'no' || lowerCaseHand === 'n') {
//   alert('DING DING DING, correct!');
// } else {
//   alert('BOOOO, wrong!');
// }

alert('Ok, enough questions about me. Lets play a number guessing game!');
// Add a 6th question to the guessing game that takes in a numeric input by prompting the user to guess a number.
let attempts = 4;
let actualNumber = 11;

while(attempts >= 0){

  let userNumber = prompt('Can you guess what number I am thinking of between 1 and 100? You only have 6 guesses to guess correctly.', '<number goes here>');
  console.log(typeof(userNumber));
  userNumber = parseInt(userNumber);
  console.log('the string after parseInt ',userNumber);
  if(!userNumber){
    break;
  }
  if (userNumber === actualNumber) {
    alert('you got it right');
    console.log('did this work? they guessed right.');
    break;
    //need set the attempts to 0;
  }
  //if it was to high 
  if(userNumber > actualNumber){
    //alert too high try again
    //continue;
  }
  //if it was to low
  // if(userNumber < actualNumber){
  //alert too low try again
  //continue;
  // }


  attempts = attempts - 1;

  //decrement the attempts

}








// alert('That was the last question, ' + userName + '. ' + 'You sorta did a great job. Have a nice day!');