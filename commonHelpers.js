import{S as u,i as d}from"./assets/vendor-8501dee5.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&o(l)}).observe(document,{childList:!0,subtree:!0});function r(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(e){if(e.ep)return;e.ep=!0;const s=r(e);fetch(e.href,s)}})();const c="https://pixabay.com",m=t=>{const i=new URLSearchParams({key:"45468562-3d934deccae668c7d7f46b2f1",q:t,image_type:"photo",orientation:"horizontal",safesearch:!0});return console.log(`${c}/api/?${i}`),fetch(`${c}/api/?${i}`).then(r=>{if(!r.ok)throw new Error("Error!");return r.json()})};function p(t){new u(".gallery .card-list-link",{captions:!0,captionClass:"style-caption",captionsData:"alt",captionDelay:250,disableRightClick:!0}).refresh()}function f(t){return`
    <li class="card-list-item">
    <a class="card-list-link" href="${t.largeImageURL}">
        <img src="${t.webformatURL}" alt="${t.tags}" class="card-list-item-img" />
        </a>
        <ul class="card-item-inside-list">
          <li class="inside-list-item">
            <h3>Likes</h3>
            <p>${t.likes}</p>
          </li>
          <li class="inside-list-item">
            <h3>Views</h3>
            <p>${t.views}</p>
          </li>
          <li class="inside-list-item">
            <h3>Comments</h3>
            <p>${t.comments}</p>
          </li>
          <li class="inside-list-item">
            <h3>Downloads</h3>
            <p>${t.downloads}</p>
          </li>
        </ul>
    </li>
    `}const n=document.querySelector(".search-form"),h=document.querySelector(".gallery"),a=document.querySelector(".loader"),y=t=>{a.classList.add("is-open"),t.preventDefault();const i=n.elements.user_query.value;m(i).then(r=>{console.log(r),r.hits.length===0&&d.info({message:"Sorry, there are no images matching your search query. Please try again!",position:"topCenter",title:"Atenttion",color:"red",timeout:4e3});let o=r.hits.map(e=>f(e)).join("");h.innerHTML=o,a.classList.remove("is-open"),document.querySelector(".gallery li a"),p()}).catch(r=>{console.log(r)}),n.reset()};n.addEventListener("submit",y);
//# sourceMappingURL=commonHelpers.js.map
