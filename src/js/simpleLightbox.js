// Описаний в документації
import SimpleLightbox from "simplelightbox";
// Додатковий імпорт стилів
import "simplelightbox/dist/simple-lightbox.min.css";

export function simpleLightbox(link) {
    let gallery = new SimpleLightbox(".gallery .card-list-link", {
  captions: true, 
  captionClass: "style-caption",
  captionsData: 'alt', 
  captionDelay: 250, 
  disableRightClick: true,
  });
  gallery.refresh();
}