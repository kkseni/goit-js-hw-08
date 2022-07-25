// Change code below this line

import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);
const SimpleLightbox = require('simplelightbox');


const galleryDiv = document.querySelector('.gallery');
const imageCardList = createImageMarkup(galleryItems)

galleryDiv.insertAdjacentHTML('beforeend', imageCardList);

function createImageMarkup(galleryItems) {

    return galleryItems
        .map(({ preview, original, description }) => {
            return `<div class="gallery">
    <a href="${preview}"><img src='${original}' alt="${description}" title="${description}"/></a>
</div>`
        }
        )
        .join('');

}

var lightbox = new SimpleLightbox('.gallery a', {
    captionData: "alt",
    captionDelay: 250
});