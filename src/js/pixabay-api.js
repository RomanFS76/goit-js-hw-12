// import iziToast from 'izitoast';
// import 'izitoast/dist/css/iziToast.min.css';

// export function getPhotos(inputValue) {
//   const API_KEY = '43330031-9673f4a92262d12e3841226eb';
//   const searchParams = new URLSearchParams({
//     key: API_KEY,
//     q: inputValue,
//     image_type: 'photo',
//     orientation: 'horizontal',
//     safesearch: true,
//     per_page: 15,
//   });

//   return fetch(`https://pixabay.com/api/?${searchParams}`).then(response => {
//     if (!response.ok) {
//       throw new Error(response.status);
//     }
//     return response.json();
//   });
// }

import axios from 'axios';

const URLservice = 'https://pixabay.com/api/';
const API_KEY = '43330031-9673f4a92262d12e3841226eb';

export async function getPhotos(inputValue) {
  const optPixabay = {
    params: {
      key: API_KEY,
      q: inputValue,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
      per_page: 15,
    },
  };

  try {
    const { data } = await axios.get(URLservice, optPixabay);
    return data;
  } catch (error) {
    console.log(error.message);
  }
}
