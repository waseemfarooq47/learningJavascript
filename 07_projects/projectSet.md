# Some Javascript Projects

## project link
[Click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

# Solution code

## project 1 Tap background color change

``` Javascript projects
const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');
console.log(buttons);
buttons.forEach((items) => {
  items.addEventListener('click', (e) => {
    // ******* using Switch case
    // const clorId = e.target.id;
    // switch (clorId) {
    //   case 'grey':
    //     body.style.backgroundColor = clorId;
    //     break;
    //   case 'white':
    //     body.style.backgroundColor = clorId;
    //     break;
    //   case 'blue':
    //     body.style.backgroundColor = clorId;
    //     break;
    //   case 'yellow':
    //     body.style.backgroundColor = clorId;
    //     break;

    //   default:
    //     console.log('default case match');
    //     break;
    // }

    if (e.target.id === 'grey') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'white') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'blue') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'yellow') {
      body.style.backgroundColor = e.target.id;
    }
  });
});


```

## Project 2 BMI Calculator

``` Javascript

const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  if (height == '' || height < 0 || isNaN(height)) {
    results.innerHTML = `Please enter valid height`;
    height = '';
  } else if (weight == '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please enter valid weight`;
    weight = '';
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    // const calBMI=results.innerHTML = bmi;
    if (bmi < 18.6) {
      results.innerHTML = `Your BMI is: ${bmi}. You are Under Weight`;
    }
    if (bmi >= 18.6 && bmi <= 24.9) {
      results.innerHTML = `Your BMI is: ${bmi}. You are Normal`;
    }
    if (bmi > 24.9) {
      results.innerHTML = `Your BMI is: ${bmi}. You are Overweight`;
    }
  }
});


```


## Project 3 digital watch

``` javascript

setInterval(() => {
  const clock = document.getElementById('clock');
  const time = new Date();

  const options = {
    timeZone: 'Asia/Muscat',
    hour12: true, // Set to false if you want 24-hour format
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
  };

  const omanTime = time.toLocaleTimeString('en-US', options);
  clock.innerHTML = omanTime;
}, 1000);

// setInterval(() => {
//   const clock = document.getElementById('clock');
//   const time = new Date();
//   const omanTime = time.toLocaleTimeString();
//   clock.innerHTML = omanTime;
// }, 1000);

```

## project 4 Random number game

```Javascript
let randomNumber = Math.round(Math.random() * 100 + 1);
const userInput = document.querySelector('#guessField');
const submit = document.querySelector('#subt');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowHigh = document.querySelector('.lowOrHi');
let startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;
let playGame = true;

if (playGame) {
  submit.addEventListener('click', (e) => {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  if (isNaN(guess)) {
    alert('Enter the valid number');
  } else if (guess < 1) {
    alert('Enter number more than 1');
  } else if (guess > 100) {
    alert('Enter number less than 100');
  } else {
    prevGuess.push(guess);
    if (numGuess === 11) {
      displayGuess(guess);
      displayMessage(`Game Over the Guess Number Was ${randomNumber}`);
      endGame();
    } else {
      checkGuess(guess);
      displayGuess(guess);
    }
  }
}

function checkGuess(guess) {
  if (guess === randomNumber) {
    displayMessage('Your Guess Was Right!!');
    endGame();
  } else if (guess < randomNumber) {
    displayMessage('Your Guess is too Low');
  } else if (guess > randomNumber) {
    displayMessage('your Guess is too High');
  }
}

function displayGuess(guess) {
  userInput.value = '';
  guessSlot.innerHTML += `${guess}, `;
  numGuess++;
  remaining.innerHTML = `${11 - numGuess}`;
}

function displayMessage(message) {
  lowHigh.innerHTML = `<h4>${message}</h4>`;
}

function endGame() {
  userInput.value = '';
  userInput.setAttribute('disabled', '');
  p.classList.add('button');
  p.innerHTML = `<h2 id="newgame">Start New Game</h2>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
}

function newGame() {
  const newGame = document.querySelector('#newgame');
  newGame.addEventListener('click', (e) => {
    randomNumber = Math.round(Math.random() * 100 + 1);
    prevGuess = [];
    numGuess = 1;
    guessSlot.innerHTML = '';
    remaining.innerHTML = `${11 - numGuess} `;
    userInput.removeAttribute('disabled');
    startOver.removeChild(p);
    playGame = true;
  });
}

```