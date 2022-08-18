import Notiflix from 'notiflix';

const formData = {};

const form = document.querySelector('.form');

form.addEventListener('input', onInputValueCreate);
form.addEventListener('submit', SubmitPromiseAction);

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    timeoutId = setTimeout(() => {
      if (shouldResolve) {
        resolve(`✅ Fulfilled promise ${position} in ${delay}ms`);
      } else {
        reject(`❌ Rejected promise ${position} in ${delay}ms`);
      }
    }, delay);
  });
}

function onInputValueCreate(evt) {
  formData[evt.target.name] = Number(evt.target.value);
}

function SubmitPromiseAction(evt) {
  evt.preventDefault();
  addPromiseNotify(formData);
}

function addPromiseNotify({ amount, delay, step }) {
  let delayTime = delay;
  for (let i = 1; i <= amount; i += 1) {
    createPromise(i, delayTime)
      .then(({ position, delay }) =>
        Notiflix.Notify.success(
          `✅ Fulfilled promise ${position} in ${delay}ms`
        )
      )
      .catch(({ position, delay }) =>
        Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`)
      );

    delayTime += step;
  }
}
