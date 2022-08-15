const start = document.querySelector('button[data-start]');
const stop = document.querySelector('button[data-stop]');
const body = document.querySelector('body');

start.addEventListener('click', onBtnStartColorChanger);
stop.addEventListener('click', onBtnStopColoChangerStop);

function onBtnStartColorChanger() {
  timerId = setInterval(getRandomHexColor, 1000);
  start.setAttribute('disabled', 'disabled');
}

function onBtnStopColoChangerStop() {
  clearInterval(timerId);
  start.removeAttribute('disabled');
}

function getRandomHexColor() {
  return (body.style.backgroundColor = `#${Math.floor(
    Math.random() * 16777215
  ).toString(16)}`);
}
