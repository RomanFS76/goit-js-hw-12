import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import { getPhotos } from './js/pixabay-api.js';
import { renderImages } from './js/render-functions.js';

const formEl = document.querySelector('.form-search');
const gallaryEl = document.querySelector('.gallary');
const btnLoadMoreEl = document.querySelector('.btn-load-more');
const loaderEl = document.querySelector('span');
const lightbox = new SimpleLightbox('.gallary a', {
  captionsData: 'alt',
  captionDelay: 250,
});

formEl.addEventListener('submit', event => {
  event.preventDefault();
  const inputValue = event.target.elements.input.value;

  loaderEl.classList.remove('visually-hidden');
  gallaryEl.innerHTML = '';

  getPhotos(inputValue)
    .then(data => {
    loaderEl.classList.add('visually-hidden');
    
    if (inputValue === '') {
      iziToast.show({
        message: 'Field must be filled!',
        color: 'green', // blue, red, green, yellow
        position: 'center', // bottomRight, bottomLeft, topRight, topLeft, topCenter, bottomCenter, center
        timeout: 2000,
      });
      return;
    }
    if (Object.keys(data.hits).length === 0) {
      iziToast.show({
        message:
          'Sorry, there are no images matching your search query. Please try again!',
        color: 'blue', // blue, red, green, yellow
        position: 'center', // bottomRight, bottomLeft, topRight, topLeft, topCenter, bottomCenter, center
        timeout: 3000,
      });
    }
    gallaryEl.insertAdjacentHTML('beforeend', renderImages(data.hits));
    lightbox.refresh();
    btnLoadMoreEl.classList.remove('visually-hidden');
  })
  .catch (error => console.log(error));
  formEl.reset();
});



// btnLoadMoreEl.addEventListener('click', loadMore)

// function loadMore ()