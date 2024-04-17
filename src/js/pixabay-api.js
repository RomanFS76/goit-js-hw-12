import { renderImages } from './render-functions.js';

import axios from 'axios';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const URLservice = 'https://pixabay.com/api/';
const API_KEY = '43330031-9673f4a92262d12e3841226eb';

const loaderEl = document.querySelector('span');
const gallaryEl = document.querySelector('.gallary');

const lightbox = new SimpleLightbox('.gallary a', {
  captionsData: 'alt',
  captionDelay: 250,
});

let page = 1;

export async function getPhotos(inputValue, page = 1) {
  const { data } = await axios.get(URLservice, {
    params: {
      key: API_KEY,
      q: inputValue,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
      per_page: 15,
      page,
    },
  });

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
  formEl.reset();

  return data;
}
