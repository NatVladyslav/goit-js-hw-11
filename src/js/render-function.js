import { fetchRequest } from "./fetchApi";
import iziToast from "izitoast";
import { simpleLightbox } from "./simpleLightbox";
import createImgCard from "./createCard";
const searchForm = document.querySelector(".search-form");
const cardsList = document.querySelector(".gallery");
const loader = document.querySelector(".loader");



const onSearchFormSubmit = (event) => {
loader.classList.add("is-open")
    event.preventDefault();
    
    const searchValue = searchForm.elements.user_query.value;
    fetchRequest(searchValue)
        .then((data) => {
            console.log(data);
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
                createImgCard(imgInfo)).join("");
            cardsList.innerHTML = info;
            loader.classList.remove("is-open");
            const link = document.querySelector(".gallery li a");
            simpleLightbox(link);
        })
        .catch((err) => {
            console.log(err);
        })
    searchForm.reset();
};

searchForm.addEventListener("submit", onSearchFormSubmit);


  





