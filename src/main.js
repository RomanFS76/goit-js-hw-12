import { getPhotos } from './js/pixabay-api.js';


const formEl = document.querySelector('.form-search');
const gallaryEl = document.querySelector('.gallary');

const loaderEl = document.querySelector('span');


formEl.addEventListener('submit', event => {
  event.preventDefault();
  const inputValue = event.target.elements.input.value;

  loaderEl.classList.remove('visually-hidden');
  gallaryEl.innerHTML = '';

  getPhotos(inputValue)
  
})