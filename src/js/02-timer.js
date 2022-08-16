import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
require('flatpickr/dist/themes/material_green.css');

import Notiflix from 'notiflix';

const button = document.querySelector('button[data-start]');
const daysEl = document.querySelector('span[data-days]');
const hoursEl = document.querySelector('span[data-hours]');
const minutesEl = document.querySelector('span[data-minutes]');
const secondsEl = document.querySelector('span[data-seconds]');

const decorationDiv = document.querySelectorAll('.field');
const divTimer = document.querySelector('.timer');
divTimer.style.display = 'flex';
divTimer.style.width = '250px';
decorationDiv.forEach(div => (div.style.marginRight = '2px'));

button.setAttribute('disabled', true);

let leftTime = null;
let intervalID = null;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    const currentTime = Date.now();
    leftTime = selectedDates[0].getTime() - currentTime;

    if (leftTime < 0) {
      Notiflix.Notify.failure('Please choose a date in the future');
      return;
    }
    Notiflix.Notify.success('Timer ready to start!', {
      timeout: 1500,
    });
    button.removeAttribute('disabled');
    return leftTime;
  },
};

flatpickr('#datetime-picker', options);

button.addEventListener('click', timer);

function timer() {
  button.setAttribute('disabled', true);
  intervalID = setInterval(() => {
    leftTime -= 1000;
    timerValueInit(convertMs(leftTime));

    if (leftTime < 1000) {
      clearInterval(intervalID);
      document.body.style.backgroundColor = '#90EE90';
      decorationDiv.forEach(div => (div.style.color = 'grey'));
      return;
    }
  }, 1000);
}

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}

const timerValueInit = function ({ days, hours, minutes, seconds }) {
  daysEl.textContent = days;
  hoursEl.textContent = hours;
  minutesEl.textContent = minutes;
  secondsEl.textContent = seconds;
};

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = addLeadingZero(Math.floor(ms / day));
  // Remaining hours
  const hours = addLeadingZero(Math.floor((ms % day) / hour));
  // Remaining minutes
  const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
  // Remaining seconds
  const seconds = addLeadingZero(
    Math.floor((((ms % day) % hour) % minute) / second)
  );

  return { days, hours, minutes, seconds };
}

daysEl.style.fontSize = '30px';
hoursEl.style.fontSize = '30px';
minutesEl.style.fontSize = '30px';
secondsEl.style.fontSize = '30px';
