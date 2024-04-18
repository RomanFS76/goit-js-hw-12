import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import { getPhotos } from './js/pixabay-api.js';
import { renderImages } from './js/render-functions.js';

const formEl = document.querySelector('.form-search');
const gallaryEl = document.querySelector('.gallary');
const loaderEl = document.querySelector('span');
const btnLoaderMoreEl = document.querySelector('.btn-load-more');

const lightbox = new SimpleLightbox('.gallary a', {
  captionsData: 'alt',
  captionDelay: 250,
});

formEl.addEventListener('submit', async event => {
  event.preventDefault();
  const inputValue = event.target.elements.input.value;

  loaderEl.classList.remove('visually-hidden');
  gallaryEl.innerHTML = '';

  try {
    const response = await getPhotos(inputValue);
    console.log(response);
    loaderEl.classList.add('visually-hidden');
    if (inputValue === '') {
      btnLoaderMoreEl.classList.add('visually-hidden');
      iziToast.show({
        message: 'Field must be filled!',
        color: 'green', // blue, red, green, yellow
        position: 'center', // bottomRight, bottomLeft, topRight, topLeft, topCenter, bottomCenter, center
        timeout: 2000,
      });
      return;
    }
    if (Object.keys(response.hits).length === 0) {
      btnLoaderMoreEl.classList.add('visually-hidden');
      iziToast.show({
        message:
          'Sorry, there are no images matching your search query. Please try again!',
        color: 'blue', // blue, red, green, yellow
        position: 'center', // bottomRight, bottomLeft, topRight, topLeft, topCenter, bottomCenter, center
        timeout: 3000,
      });
      formEl.reset();
      return;
    }

    gallaryEl.insertAdjacentHTML('beforeend', renderImages(response.hits));
    lightbox.refresh();
    btnLoaderMoreEl.classList.remove('visually-hidden');
  } catch (error) {
    console.log(error.message);
  }
  // formEl.reset();
});

let page = 2;

btnLoaderMoreEl.addEventListener('click', async () => {
  loaderEl.classList.remove('visually-hidden');
  btnLoaderMoreEl.disabled = true;

  const nextPage = await getPhotos(page);

  page += 1;

  gallaryEl.insertAdjacentHTML('beforeend', renderImages(nextPage.hits));

  loaderEl.classList.add('visually-hidden');
  btnLoaderMoreEl.disabled = false;

  const totalPage = Math.ceil(nextPage.totalHits / nextPage.hits.length);

  if (page >= totalPage) {
    btnLoaderMoreEl.classList.add('visually-hidden');
  }
});

// getBoundingClientRect();

// let elem = document.querySelector("div");
// let rect = elem.getBoundingClientRect();
// for (const key in rect) {
//   if (typeof rect[key] !== "function") {
//     let para = document.createElement("p");
//     para.textContent = `${key} : ${rect[key]}`;
//     document.body.appendChild(para);
//   }
// }
