import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryList = document.querySelector('.gallery');

const imagesListArr = galleryItems.map((image) => {
return `<li class="gallery__item"><a class="gallery__link" href="${image.original}"> <img class="gallery__image"
      src="${image.preview}"
      alt="${image.description}"
    />
  </a>
</li>`
})
const listTemplate = `
${imagesListArr.join('')}
 `;
galleryList.insertAdjacentHTML('beforeend', listTemplate);

