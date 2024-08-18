import { fetchRequest } from "./js/pixabay-api";
import { createCard } from "./js/render-functions";
import iziToast from "izitoast";
import SimpleLightbox from "simplelightbox";
const searchForm = document.querySelector(".search-form");
const cardsList = document.querySelector(".gallery");
const loader = document.querySelector(".loader");

const onSearchFormSubmit = (event) => {
loader.classList.add("is-open")
    event.preventDefault();
    
    const searchValue = searchForm.elements.user_query.value;
    fetchRequest(searchValue)
        .then((data) => {
            if (data.hits.length === 0) {
                iziToast.info({
                    message: "Sorry, there are no images matching your search query. Please try again!",
                    position: "topCenter",
                    title: "Atenttion",
                    color: "red",
                    timeout: 4000,
                })
            }
            let info = data.hits.map(imgInfo =>
                createCard(imgInfo)).join("");
            cardsList.innerHTML = info;
            loader.classList.remove("is-open");
            let gallery = new SimpleLightbox(".gallery li a", {
  captions: true, 
  captionClass: "style-caption",
  captionsData: 'alt', 
  captionDelay: 250, 
  disableRightClick: true,
  });
  gallery.refresh();
        })
        .catch((err) => {
            console.log(err);
        })
    searchForm.reset();
};
searchForm.addEventListener("submit", onSearchFormSubmit);