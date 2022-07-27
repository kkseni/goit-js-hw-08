// Change code below this li[ne

import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const galleryDiv = document.querySelector('.gallery');
const imageCardList = createImageMarkup(galleryItems)

galleryDiv.insertAdjacentHTML('beforeend', imageCardList);

function createImageMarkup(galleryItems) {

    return galleryItems
        .map(({ preview, original, description }) => {
            return `<div class="gallery">
    <a href="${original}"><img src='${preview}' alt="${description}" title="${description}"/></a>
</div>`
        }
        )
        .join('');

}

var lightbox = new SimpleLightbox('.gallery a', {
    captionData: "alt",
    captionDelay: 250,

});

