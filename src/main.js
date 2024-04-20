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

// --------------search--------------

let searchValue = null;

formEl.addEventListener('submit', async event => {
  event.preventDefault();

  const inputValue = event.target.elements.input.value;
  searchValue = inputValue;

  loaderEl.classList.remove('visually-hidden');
  btnLoaderMoreEl.classList.add('visually-hidden');

  gallaryEl.innerHTML = '';

  try {
    const response = await getPhotos(inputValue);
    if (inputValue === '') {
      loaderEl.classList.add('visually-hidden');
      iziToast.show({
        message: 'Field must be filled!',
        color: 'green', // blue, red, green, yellow
        position: 'center', // bottomRight, bottomLeft, topRight, topLeft, topCenter, bottomCenter, center
        timeout: 2000,
      });
      return;
    }
    if (Object.keys(response.hits).length === 0) {
      loaderEl.classList.add('visually-hidden');
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
    loaderEl.classList.add('visually-hidden');
  } catch (error) {
    console.log(error.message);
  }
});

// --------------LoaderMore--------------

let page = 1;

btnLoaderMoreEl.addEventListener('click', async () => {
  btnLoaderMoreEl.classList.add('visually-hidden');
  loaderEl.classList.remove('visually-hidden');
  btnLoaderMoreEl.disabled = true;

  try {
    page += 1;

    const nextPage = await getPhotos(searchValue, page);

    btnLoaderMoreEl.classList.remove('visually-hidden');
    loaderEl.classList.add('visually-hidden');

    gallaryEl.insertAdjacentHTML('beforeend', renderImages(nextPage.hits));

    btnLoaderMoreEl.disabled = false;
    // --------------getBoundingClientRect---------------------------------
    let rect = gallaryEl.firstElementChild.getBoundingClientRect();

    console.log(rect.height);

    const heightScroll = rect.height * 2;
    window.scrollBy({
      top: heightScroll,
      left: 0,
      behavior: 'smooth',
    });

    // ---------------------------------------------------------------------

    const totalPage = Math.ceil(nextPage.totalHits / nextPage.hits.length);

    if (page >= totalPage) {
      btnLoaderMoreEl.classList.add('visually-hidden');
      iziToast.show({
        message: "We're sorry, but you've reached the end of search results.",
        color: 'red', // blue, red, green, yellow
        position: 'topLeft', // bottomRight, bottomLeft, topRight, topLeft, topCenter, bottomCenter, center
        timeout: 2000,
      });
    }
  } catch (error) {
    console.log(error.message);
  }
});
