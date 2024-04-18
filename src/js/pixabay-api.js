import axios from 'axios';

const URLservice = 'https://pixabay.com/api/';
const API_KEY = '43330031-9673f4a92262d12e3841226eb';



export async function getPhotos(inputValue, page = 1) {
  const { data } = await axios(URLservice, {
    params: {
      key: API_KEY,
      q: inputValue,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
      per_page:15,
      page
    },
  });
  return data;
}
