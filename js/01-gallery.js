import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryList = document.querySelector('.gallery');

const imagesListArr = galleryItems.map((image) => {
return `<li class="gallery__item"><a class="gallery__link" href="${image.original}"> <img class="gallery__image"
      src="${image.preview}"
      data-source="${image.original}"
      alt="${image.description}"
    />
  </a>
</li>`
})
const listTemplate = `
${imagesListArr.join('')}
 `;
galleryList.insertAdjacentHTML('beforeend', listTemplate);


const container = document.querySelector('.gallery');
container.addEventListener('click', onClick);

let instance;

function onClick(event) {
    event.preventDefault();
    if (event.target.nodeName !== 'IMG') {
        return;
    }

const largeImageUrl = event.target.dataset.source;    
 instance = basicLightbox.create(`
    <img src="${largeImageUrl}" alt="${event.target.alt}">
`);

instance.show()
} 

document.addEventListener('keyup', closeGallery);
function closeGallery(event) {
  if (event.code === 'Escape') {
    instance.close();
  }
}