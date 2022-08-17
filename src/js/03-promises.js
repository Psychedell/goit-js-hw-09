import Notiflix from 'notiflix';

const form = document.querySelector('.form');

form.addEventListener('input', onInputValueCreate);
form.addEventListener('submit', SubmitPromiseAction);

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
        resolve(`✅ Fulfilled promise ${position} in ${delay}ms`);
      } else {
        reject(`❌ Rejected promise ${position} in ${delay}ms`);
      }
    }, delay);
  });
}

const formData = {};

function onInputValueCreate(evt) {
  formData[evt.target.name] = Number(evt.target.value);
}

function SubmitPromiseAction(evt) {
  evt.preventDefault();

  for (let i = 1; i <= formData.amount; i += 1) {
    createPromise(i, formData.delay)
      .then(value => Notiflix.Notify.success(value))
      .catch(error => Notiflix.Notify.failure(error));

    formData.delay += formData.step;
  }
}
