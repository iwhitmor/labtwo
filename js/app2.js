'use strict';
console.log('app2.js file is connected');

// alert('Welcome to my quiz page. Answer all of the questions correctly to win a prize (that is fake and not real). Good luck, have fun!');

// function questionOne() {
//   let favoriteSport = prompt('Is my favorite sport golf?');
//   let lowerCaseSport = favoriteSport.toLowerCase();
//   if (lowerCaseSport === 'yes' || lowerCaseSport === 'y') {
//     alert('DING DING DING, correct!');
//   } else {
//     alert('BOOOO, wrong!');
//   }
//   console.log('Answer to favorite sport', lowerCaseSport);
// }
// questionOne();

// function questiontwo() {
//   let favoriteFood = prompt('Is my favorite food tuna fish in a can?');
//   let lowerCaseFood = favoriteFood.toLowerCase();
//   if (lowerCaseFood === 'no' || lowerCaseFood === 'n') {
//     alert('DING DING DING, correct!');
//   } else {
//     alert('BOOOO, wrong!');
//   }
//   console.log('Answer to favorite food', lowerCaseFood);
// }
// questiontwo();

// function questionThree() {
//   let stateBorn = prompt('Was I born in New York State?');
//   let lowerCaseBorn = stateBorn.toLowerCase();
//   if (lowerCaseBorn === 'yes' || lowerCaseBorn === 'y') {
//     alert('DING DING DING, correct!');
//   } else {
//     alert('BOOOO, wrong!');
//   }
//   console.log('Answer to state born', lowerCaseBorn);
// }
// questionThree();

// function questionFour() {
//   let favoriteMusic = prompt('Is my favorite type of music Reggae?');
//   let lowerCaseMusic = favoriteMusic.toLowerCase();
//   if (lowerCaseMusic === 'yes' || lowerCaseMusic === 'y') {
//     alert('DING DING DING, correct!');
//   } else {
//     alert('BOOOO, wrong!');
//   }
//   console.log('Answer to favorite music', lowerCaseMusic);
// }
// questionFour();

// function questionFive() {
//   let dominantHand = prompt('Am and right handed?');
//   let lowerCaseHand = dominantHand.toLowerCase();
//   if (lowerCaseHand === 'no' || lowerCaseHand === 'n') {
//     alert('DING DING DING, correct!');
//   } else {
//     alert('BOOOO, wrong!');
//   }
//   console.log('Answer to dominant hand', lowerCaseHand);
// }
// questionFive();

// alert('Now lets play a number guessing game!');

// function questionSix() {
//   let attempts = 6;
//   let actualNumber = 11;

//   while (attempts > 0) {

//     let userNumber = prompt('Can you guess my favorite number (between 1 and 50)? This is the number I wore on all my jerseys while playing sports during my illustrious career. You only have 6 guesses to guess correctly.', '<number goes here>');
//     console.log(typeof (userNumber));
//     userNumber = parseInt(userNumber);
//     console.log('the string after parseInt ', userNumber);
//     if (!userNumber) {
//       break;
//     }

//     if (userNumber > actualNumber) {
//       alert('That guess was too high. Try again!');
//     } else if (userNumber < actualNumber) {
//       alert('That guess was too low. Try again!');
//     } else {
//       alert('You got it right. Nice job!');
//       console.log('did this work? they guessed right.');
//       break;
//     }

//     attempts = attempts - 1;
//   }

//   alert('Your all done. The correct answer was 11.');
// }

// questionSix();

// alert('Just a few more questions about food. Here we go!');

let favoriteFood = ['wings', 'pizza', 'burgers', 'meatloaf', 'sushi', 'BBQ'];
console.log(favoriteFood);

let attempts = 0;
let correctAnswer = 0;

while (attempts !== 6) {
  let userAnswer = prompt('What are my favorite foods? (There are 6, so you will have 6 guesses).');
  let userAnswerTrimmedtoLowerCase = userAnswer.toLowerCase().trim();

  if (favoriteFood.indexOf(userAnswerTrimmedtoLowerCase) >= 0) {
    alert('Yes! ' + userAnswerTrimmedtoLowerCase + ' is one of my favorite foods!');
  } else {
    alert('That isnt my favorite, but I sometimes like that too!');
  }

  attempts = attempts + 1;

}

alert('All of my favorite foods are: ' + favoriteFood.join(', '));
alert('You answered ' + correctAnswer + ' out of 6 correctly');
alert('Thanks for playing along. Have a great day!');

