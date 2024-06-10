// iziToast
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import errorIcon from '../img/errorIcon.svg';
import successIcon from '../img/success.svg';

const formElem = document.querySelector('.form');

formElem.addEventListener('submit', event => {
  event.preventDefault();
  const promiseDelay = formElem.delay.value;
  const stateValue = formElem.state.value;
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (stateValue === 'fulfilled') {
        resolve(
          iziToast.success({
            iconUrl: successIcon,
            message: `Fulfilled promise in ${promiseDelay}ms`,
            messageColor: '#ffffff',
            backgroundColor: '#59A10D',
            progressBarColor: '#326101',
            progressBarEasing: 'linear',
            position: 'topRight',
          })
        );
      } else {
        reject(
          iziToast.error({
            iconUrl: errorIcon,
            message: `Rejected promise in ${promiseDelay}ms`,
            messageColor: '#ffffff',
            backgroundColor: '#EF4040',
            progressBarColor: '#B51B1B',
            progressBarEasing: 'linear',
            position: 'topRight',
          })
        );
      }
    }, promiseDelay);
  });
  formElem.reset();
});
