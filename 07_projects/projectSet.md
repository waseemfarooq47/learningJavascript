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