
let button = document.querySelector(".btn")
button.addEventListener('click', init);

let time = 5;
let score = 0;
let isPlaying;

// Variable for the intervals so it can be cleared
let countdownInterval;
let checkStatusInterval;


const wordInput = document.querySelector('#word-input');
const currentWord = document.querySelector('#current-word');
const scoreDisplay = document.querySelector('#score');
const timeDisplay = document.querySelector('#time');
const message = document.querySelector('#message');
const seconds = document.querySelector('#seconds');
const highscoreDisplay = document.querySelector('#highscore');

const words = [
  'hello',
  'pond',
  'brave',
  'river',
  'backbone',

  'stubborn',
  'cocktail',
  'runaway',
  'joke',
  'developer',
  'establishment',
  'hero',
  'javascript',
  'nutrition',
  'revolver',
  'echo',
  'siblings',
  'investigate',
  'horrendous',
  'symptom',
  'laughter',
  'magic',
  'master',
  'space',
  'definition'
];


function init() {
  isPlaying = true;

  time = 5;
  score = 0;

  showWord(words);

  message.innerHTML = '';
  scoreDisplay.innerHTML = 0;

  wordInput.value = '';
  wordInput.focus();
  wordInput.addEventListener('input', startMatch);

  clearInterval(countdownInterval);
  countdownInterval = setInterval(countdown, 1000);

  clearInterval(checkStatusInterval);
  checkStatusInterval = setInterval(checkStatus, 50);
}


function startMatch() {
  if (isPlaying && matchWords()) {
    time = 5;
    showWord(words);
    wordInput.value = '';
    score++;
  }

  if (score === -1) {
    scoreDisplay.innerHTML = 0;
  } else {
    scoreDisplay.innerHTML = score;
  }
}


function matchWords() {
  if (wordInput.value == currentWord.innerHTML) {
    message.innerHTML = 'Correct!!!';
    message.style.color = 'green';
    return true;
  } else {
    message.innerHTML = '';
    return false;
  }
}

function showWord(words) {

  const randIndex = Math.floor(Math.random() * words.length);

  currentWord.innerHTML = words[randIndex];
}


function countdown() {
  timeDisplay.innerHTML = time;
  if (time > 0) {
    time--;
  } else if (time <= 0) {
    isPlaying = false;
  }
}


function checkStatus() {
  if (!isPlaying && time === 0) {
    message.innerHTML = 'Game Over!!!';
    message.style.color = 'red';
  }
}