export function renderImages(arr) {
  return arr
    .map(
      ({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) =>
        `
        <li class="gallary-item">
          <a class="gallary-link" href="${largeImageURL}">
              <img 
                class="gallary-image" 
                src="${webformatURL}"
                alt="${tags}"
                width = "1000"
                height = "800"
              />
          </a>
          <div class="gallary-desc">
            <ul class="gallary-desc-list">
              <li class="gallary-desc-item">
                <p>Likes</p>
                <p>${likes}</p>
              </li>
              <li class="gallary-desc-item">
                <p>Views</p>
                <p>${views}</p>
              </li>
              <li class="gallary-desc-item">
                <p>Comments</p>
                <p>${comments}</p>
              </li>
              <li class="gallary-desc-item">
                <p>Downloads</p>
                <p>${downloads}</p>
              </li>
            </ul>
          </div>
        </li>
      `
    )
    .join('');
}
